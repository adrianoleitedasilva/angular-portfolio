import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideNoopAnimations()],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-header')).not.toBeNull();
  });

  it('should render app-knowledge', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-knowledge')).not.toBeNull();
  });

  it('should render app-experience', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-experience')).not.toBeNull();
  });

  it('should show placeholder while projects are deferred', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Carregando os projetos desenvolvidos');
  });
});
