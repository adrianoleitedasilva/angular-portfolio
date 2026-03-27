# Portfolio Angular

Template de portfólio desenvolvido com Angular 17, para apresentar experiências profissionais, habilidades técnicas e projetos desenvolvidos.

![Angular](https://img.shields.io/badge/Angular-17-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Angular Material](https://img.shields.io/badge/Angular%20Material-17-757575?style=for-the-badge&logo=angular&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-7.8-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Karma](https://img.shields.io/badge/Karma-6.4-56C800?style=for-the-badge&logo=karma&logoColor=white)
![Jasmine](https://img.shields.io/badge/Jasmine-5.1-8A4182?style=for-the-badge&logo=jasmine&logoColor=white)

## Visão Geral

Site de portfólio com tema escuro, design responsivo e carregamento lazy dos componentes. Construído com Angular 17 usando a API de **Standalone Components** (sem NgModules).

## Tecnologias

- **Angular 17** — framework principal, com standalone components e `@defer`
- **Angular Material 17** — componentes de UI e tema visual
- **SCSS** — estilos organizados por categorias (base, layout, components, theme)
- **TypeScript 5.2** — tipagem estática com interfaces para os dados do portfólio

## Estrutura do Projeto

```text
src/
├── app/
│   ├── modules/
│   │   └── portfolio/
│   │       ├── components/
│   │       │   ├── header/         # Seção de perfil e contato
│   │       │   ├── knowledge/      # Habilidades técnicas
│   │       │   ├── experience/     # Histórico profissional
│   │       │   └── projects/       # Projetos (lazy load via @defer)
│   │       ├── interface/          # Interfaces TypeScript
│   │       └── pages/
│   │           └── home/           # Página principal
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
│   ├── icons/                      # Ícones SVG (tecnologias, contato)
│   ├── img/                        # Foto de perfil
│   └── pdf/                        # Currículo em PDF
└── scss/
    ├── base/                       # Reset e estilos globais
    ├── components/                 # Estilos de componentes reutilizáveis
    ├── layout/                     # Grid e containers
    └── theme/                      # Variáveis CSS (cores, tipografia)
```

## Seções do Portfólio

| Seção         | Componente            | Descrição                                            |
| ------------- | --------------------- | ---------------------------------------------------- |
| Header        | `HeaderComponent`     | Foto, título, localização e links de contato         |
| Conhecimentos | `KnowledgeComponent`  | Ícones das tecnologias dominadas                     |
| Experiências  | `ExperienceComponent` | Histórico profissional em accordion expansível       |
| Projetos      | `ProjectsComponent`   | Cards de projetos com links (carregado com `@defer`) |

## Tema e Estilos

As cores do tema são definidas como variáveis CSS em `src/scss/theme/_variables.scss`:

```scss
--primary: #2fbf71        // Verde principal
--primary-010: #21804d    // Verde escuro
--secondary: #06628a      // Azul
--secondary-010: #06374e  // Azul escuro
--black: #10101a          // Fundo principal
--black-010: #2a2a30      // Fundo secundário
--grey: #9b9ba0;          // Texto secundário
```

## Como Rodar

### Pré-requisitos

- Node.js 18+
- Angular CLI 17: `npm install -g @angular/cli`

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm start
# ou
ng serve
```

Acesse `http://localhost:4200/`. O servidor recarrega automaticamente ao salvar arquivos.

### Build para Produção

```bash
npm run build
```

Os artefatos de build são gerados na pasta `dist/`.

### Testes

```bash
npm test
```

Executa os testes unitários via [Karma](https://karma-runner.github.io) + [Jasmine](https://jasmine.github.io/).

Os testes cobrem todos os componentes da aplicação:

| Componente                | Cobertura                                                               |
| ------------------------- | ----------------------------------------------------------------------- |
| `AppComponent`            | criação, propriedade `title`, renderização do `<router-outlet>`         |
| `HomeComponent`           | renderização dos filhos e placeholder do `@defer`                       |
| `HeaderComponent`         | propriedade `email`, template, imagem de perfil, links, mailto          |
| `KnowledgeComponent`      | signal, campos obrigatórios, itens renderizados no DOM                  |
| `ExperienceComponent`     | signal, campos obrigatórios, `<details>` por item, conteúdo no DOM      |
| `ProjectsComponent`       | signal, botões, abertura do dialog com dados e `panelClass` corretos    |
| `DialogProjectsComponent` | carregamento de dados no `ngOnInit`, título, links, fechamento do modal |

## Interfaces de Dados

As interfaces TypeScript estão em `src/app/modules/portfolio/interface/`:

```typescript
// Habilidade técnica
interface IKnowledge {
  src: string; // caminho do ícone
  alt: string; // nome da tecnologia
}

// Experiência profissional
interface IExperiences {
  summary: {
    strong: string; // cargo/título
    p: string; // período
  };
  text: string; // descrição detalhada
}

// Projeto
interface IProjects {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  description: string;
  links: Array<{ name: string; href: string }>;
}
```

## Destaques Técnicos

- **`@defer`** — o `ProjectsComponent` é carregado apenas quando entra no viewport, reduzindo o bundle inicial
- **Standalone Components** — arquitetura moderna do Angular 17, sem NgModules
- **SCSS modular** — organização por responsabilidade com `_index.scss` em cada pasta
- **Material Design** — tema `indigo-pink` com personalização via variáveis CSS

## Como Personalizar

1. Substitua os dados em `src/app/modules/portfolio/pages/home/home.component.ts`
2. Troque a foto de perfil em `src/assets/img/`
3. Adicione seu currículo em `src/assets/pdf/`
4. Atualize os ícones de tecnologias em `src/assets/icons/`
5. Ajuste as cores do tema em `src/scss/theme/_variables.scss`
