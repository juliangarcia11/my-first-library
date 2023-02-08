import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DebugElement} from "@angular/core";
import {AuInputModule} from "./au-input-module/au-input.module";
import {AuTabPanelModule} from "./au-tab-panel-module/au-tab-panel.module";
import {AuModalComponent} from "./au-modal-module/au-modal/au-modal.component";

// jasmine is our test framework

describe('AppComponent', () => {

  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      el: DebugElement;

  // before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // add components to test here
        AppComponent, AuInputModule, AuTabPanelModule, AuModalComponent
      ],
    }).compileComponents(); // tests only occur after components are compiled
  });

  // before each test
  beforeEach(() => {
    // initialize common params
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;

    // run angular change detections
    fixture.detectChanges();
  });

  // each 'it' is a test
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
