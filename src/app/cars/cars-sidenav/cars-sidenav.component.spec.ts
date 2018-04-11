import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsSidenavComponent } from './cars-sidenav.component';

describe('CarsSidenavComponent', () => {
  let component: CarsSidenavComponent;
  let fixture: ComponentFixture<CarsSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
