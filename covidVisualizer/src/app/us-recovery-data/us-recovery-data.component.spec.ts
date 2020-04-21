import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsRecoveryDataComponent } from './us-recovery-data.component';

describe('UsRecoveryDataComponent', () => {
  let component: UsRecoveryDataComponent;
  let fixture: ComponentFixture<UsRecoveryDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsRecoveryDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsRecoveryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
