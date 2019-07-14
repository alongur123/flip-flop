import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFlightsComponent } from './new-flights.component';

describe('NewFlightsComponent', () => {
  let component: NewFlightsComponent;
  let fixture: ComponentFixture<NewFlightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFlightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
