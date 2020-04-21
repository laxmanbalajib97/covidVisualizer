import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsDataDeathsComponent } from './us-data-deaths.component';

describe('UsDataDeathsComponent', () => {
  let component: UsDataDeathsComponent;
  let fixture: ComponentFixture<UsDataDeathsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsDataDeathsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsDataDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
