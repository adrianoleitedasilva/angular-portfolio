import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/adriano.jpg',
      alt: 'Projeto',
      title: 'Projeto',
      width: '100px',
      height: '51px',
      description: '<p></p>',
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
      description: '<p></p>',
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
      description: '<p></p>',
      links: [
        { name: 'Conheça o Blog', href: 'https://www.adrianosilva.pro.br/' },
      ],
    },
  ]);
}
