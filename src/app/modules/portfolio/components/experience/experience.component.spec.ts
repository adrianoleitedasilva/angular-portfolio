import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceComponent } from './experience.component';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize arrayExperiences with at least one item', () => {
    expect(component.arrayExperiences().length).toBeGreaterThan(0);
  });

  it('each experience should have a title (strong) and period (p) defined', () => {
    component.arrayExperiences().forEach(exp => {
      expect(exp.summary.strong).toBeTruthy();
      expect(exp.summary.p).toBeTruthy();
    });
  });

  it('each experience should have a non-empty text', () => {
    component.arrayExperiences().forEach(exp => {
      expect(exp.text).toBeTruthy();
    });
  });

  it('should render one <details> per experience item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const details = compiled.querySelectorAll('details');
    expect(details.length).toEqual(component.arrayExperiences().length);
  });

  it('should render section heading "Últimas Experiências"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent?.trim()).toContain('Últimas Experiências');
  });

  it('should render the job title of the first experience', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const firstTitle = component.arrayExperiences()[0].summary.strong;
    expect(compiled.textContent).toContain(firstTitle);
  });
});
