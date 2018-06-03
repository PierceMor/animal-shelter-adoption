import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToAdoptComponent } from './how-to-adopt.component';

describe('HowToAdoptComponent', () => {
  let component: HowToAdoptComponent;
  let fixture: ComponentFixture<HowToAdoptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToAdoptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToAdoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
