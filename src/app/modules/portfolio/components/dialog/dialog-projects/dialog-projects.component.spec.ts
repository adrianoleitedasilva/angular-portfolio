import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogProjectsComponent } from './dialog-projects.component';
import { IProjects } from '../../../interface/IProjects.interface';

const mockProject: IProjects = {
  src: 'assets/img/test.jpg',
  alt: 'Projeto Teste',
  title: 'Projeto Teste',
  width: '100px',
  height: '51px',
  description: '<p>Descrição do projeto teste</p>',
  links: [{ name: 'Ver Projeto', href: 'https://example.com' }],
};

describe('DialogProjectsComponent', () => {
  let component: DialogProjectsComponent;
  let fixture: ComponentFixture<DialogProjectsComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<DialogProjectsComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [DialogProjectsComponent],
      providers: [
        provideNoopAnimations(),
        { provide: MAT_DIALOG_DATA, useValue: mockProject },
        { provide: MatDialogRef, useValue: dialogRefSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load the injected project data on init', () => {
    expect(component.getData()).toEqual(mockProject);
  });

  it('getData signal should be null before ngOnInit', () => {
    const freshFixture = TestBed.createComponent(DialogProjectsComponent);
    expect(freshFixture.componentInstance.getData()).toBeNull();
  });

  it('should render the project title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(mockProject.title);
  });

  it('should render the correct number of links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('nav a');
    expect(links.length).toEqual(mockProject.links.length);
  });

  it('each link should have the correct href', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('nav a');
    mockProject.links.forEach((link, i) => {
      expect((links[i] as HTMLAnchorElement).href).toContain(link.href);
    });
  });

  it('closeModal should call dialogRef.close()', () => {
    component.closeModal();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should close modal when close button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const closeButton = compiled.querySelector('header button') as HTMLButtonElement;
    closeButton.click();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
