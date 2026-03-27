import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have email property defined', () => {
    expect(component.email).toBeTruthy();
  });

  it('should render the email in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(component.email);
  });

  it('should render a profile image inside header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('header img');
    expect(img).not.toBeNull();
  });

  it('should render at least two navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('nav a');
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  it('should render a mailto link with the email address', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const mailtoLink = compiled.querySelector(`a[href="mailto:${component.email}"]`);
    expect(mailtoLink).not.toBeNull();
  });
});
