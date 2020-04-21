import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsCovidDataComponent } from './us-covid-data.component';

describe('UsCovidDataComponent', () => {
  let component: UsCovidDataComponent;
  let fixture: ComponentFixture<UsCovidDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsCovidDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsCovidDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
