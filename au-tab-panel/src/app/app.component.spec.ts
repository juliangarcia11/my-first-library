import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AuTabPanelComponent} from "./au-tab-panel/au-tab-panel.component";
import {AuTabComponent} from "./au-tab/au-tab.component";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent, AuTabPanelComponent, AuTabComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
