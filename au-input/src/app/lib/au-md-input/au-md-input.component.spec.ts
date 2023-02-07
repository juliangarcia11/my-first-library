import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuMdInputComponent } from './au-md-input.component';

describe('AuMdInputComponent', () => {
  let component: AuMdInputComponent;
  let fixture: ComponentFixture<AuMdInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuMdInputComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuMdInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an AuMdInputComponent', () => {
    expect(component).toBeTruthy();
  });
});
