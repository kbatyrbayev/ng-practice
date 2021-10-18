import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSectionComponent } from './component-section.component';

describe('ComponentSectionComponent', () => {
  let component: ComponentSectionComponent;
  let fixture: ComponentFixture<ComponentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
