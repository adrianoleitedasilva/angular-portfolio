import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsComponent } from './projects.component';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let openSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    openSpy = spyOn(fixture.debugElement.injector.get(MatDialog), 'open').and.returnValue({} as any);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize arrayProjects with at least one item', () => {
    expect(component.arrayProjects().length).toBeGreaterThan(0);
  });

  it('each project should have required fields defined', () => {
    component.arrayProjects().forEach(project => {
      expect(project.src).toBeTruthy();
      expect(project.alt).toBeTruthy();
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.links.length).toBeGreaterThan(0);
    });
  });

  it('should render one button per project', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('ul li button');
    expect(buttons.length).toEqual(component.arrayProjects().length);
  });

  it('should render section heading "Projetos desenvolvidos"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent?.trim()).toContain('Projetos desenvolvidos');
  });

  it('openDialog should call MatDialog.open with project data and panel class', () => {
    const mockProject = component.arrayProjects()[0];
    component.openDialog(mockProject);
    expect(openSpy).toHaveBeenCalledWith(DialogProjectsComponent, {
      data: mockProject,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  });

  it('should open dialog when a project button is clicked', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstButton = compiled.querySelector('ul li button') as HTMLButtonElement;
    firstButton.click();
    expect(openSpy).toHaveBeenCalledTimes(1);
  });
});
