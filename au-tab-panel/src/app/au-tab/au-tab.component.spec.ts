import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuTabComponent } from './au-tab.component';

describe('AuTabComponent', () => {
  let component: AuTabComponent;
  let fixture: ComponentFixture<AuTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuTabComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AuTabComponent', () => {
    expect(component).toBeTruthy();
  });
});
