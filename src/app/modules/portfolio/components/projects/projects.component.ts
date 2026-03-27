import { Component, signal, inject } from '@angular/core';

// Interface
import { IProjects } from '../../interface/IProjects.interface';

// Angular Material
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/adriano.jpg',
      alt: 'Projeto',
      title: 'Projeto',
      width: '100px',
      height: '51px',
      description:
        '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ea alias, porro dolor quo provident cum tempore veniam? Eligendi quibusdam delectus cum recusandae, perspiciatis illum ipsum necessitatibus ratione beatae quas!</p>',
      links: [
        { name: 'Conheça o Blog', href: 'https://www.adrianosilva.pro.br/' },
      ],
    },
    {
      src: 'assets/img/adriano.jpg',
      alt: 'Projeto',
      title: 'Projeto',
      width: '100px',
      height: '51px',
      description:
        '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ea alias, porro dolor quo provident cum tempore veniam? Eligendi quibusdam delectus cum recusandae, perspiciatis illum ipsum necessitatibus ratione beatae quas!</p>',
      links: [
        { name: 'Conheça o Blog', href: 'https://www.adrianosilva.pro.br/' },
      ],
    },
    {
      src: 'assets/img/adriano.jpg',
      alt: 'Projeto',
      title: 'Projeto',
      width: '100px',
      height: '51px',
      description:
        '<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis ea alias, porro dolor quo provident cum tempore veniam? Eligendi quibusdam delectus cum recusandae, perspiciatis illum ipsum necessitatibus ratione beatae quas!</p>',
      links: [
        { name: 'Conheça o Blog', href: 'https://www.adrianosilva.pro.br/' },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
