import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuModalComponent } from './au-modal.component';

describe('AuModalComponent', () => {
  let component: AuModalComponent;
  let fixture: ComponentFixture<AuModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
