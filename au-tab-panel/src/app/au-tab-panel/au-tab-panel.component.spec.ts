import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuTabPanelComponent } from './au-tab-panel.component';

describe('AuTabPanelComponent', () => {
  let component: AuTabPanelComponent;
  let fixture: ComponentFixture<AuTabPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuTabPanelComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(AuTabPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create AuTabPanelComponent', () => {
    expect(component).toBeTruthy();
  });
});
