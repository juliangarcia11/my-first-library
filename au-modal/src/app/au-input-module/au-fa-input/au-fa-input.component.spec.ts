import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuFaInputComponent } from './au-fa-input.component';

describe('AuFaInputComponent', () => {
  let component: AuFaInputComponent;
  let fixture: ComponentFixture<AuFaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuFaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an AuFaInputComponent', () => {
    expect(component).toBeTruthy();
  });
});
