import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalFilterComponent } from './animal-filter.component';

describe('AnimalFilterComponent', () => {
  let component: AnimalFilterComponent;
  let fixture: ComponentFixture<AnimalFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
