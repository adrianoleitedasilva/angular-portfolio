# Portfolio

Portfolio pessoal desenvolvido com Angular 17, apresentando experiências profissionais, habilidades técnicas e projetos desenvolvidos.

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
--primary: #2fbf71 // Verde principal
  --primary-010: #21804d // Verde escuro
  --secondary: #06628a // Azul
  --secondary-010: #06374e // Azul escuro
  --black: #10101a // Fundo principal
  --black-010: #2a2a30 // Fundo secundário
  --grey: #9b9ba0; // Texto secundário
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

Executa os testes unitários via [Karma](https://karma-runner.github.io).

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

## Contato

- **Email:** disponível no portfólio
- **LinkedIn:** disponível no portfólio
- **WhatsApp:** disponível no portfólio
- **Currículo:** `src/assets/pdf/Adriano Silva.pdf`
