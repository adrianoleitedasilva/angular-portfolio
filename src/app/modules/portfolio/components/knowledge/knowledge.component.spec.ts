import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KnowledgeComponent } from './knowledge.component';

describe('KnowledgeComponent', () => {
  let component: KnowledgeComponent;
  let fixture: ComponentFixture<KnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize arrayKnowledge with at least one item', () => {
    expect(component.arrayKnowledge().length).toBeGreaterThan(0);
  });

  it('each knowledge item should have src and alt defined', () => {
    component.arrayKnowledge().forEach(item => {
      expect(item.src).toBeTruthy();
      expect(item.alt).toBeTruthy();
    });
  });

  it('should render one <li> per knowledge item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const items = compiled.querySelectorAll('ul li');
    expect(items.length).toEqual(component.arrayKnowledge().length);
  });

  it('should render an <img> for each knowledge item', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const images = compiled.querySelectorAll('ul li img');
    expect(images.length).toEqual(component.arrayKnowledge().length);
  });

  it('should render the section heading "Conhecimentos"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent?.trim()).toContain('Conhecimentos');
  });
});
