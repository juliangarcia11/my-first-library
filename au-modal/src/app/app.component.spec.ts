import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {DebugElement} from "@angular/core";
import {AuFaInputComponent} from "./au-input-module/au-fa-input/au-fa-input.component";
import {AuMdInputComponent} from "./au-input-module/au-md-input/au-md-input.component";
import {AuTabPanelComponent} from "./au-tab-panel-module/au-tab-panel/au-tab-panel.component";
import {AuTabComponent} from "./au-tab-panel-module/au-tab/au-tab.component";
import {AuModalOpenOnClickDirective} from "./au-modal-module/au-modal-open-on-click.directive";
import {By} from "@angular/platform-browser";
import {AuModalComponent} from "./au-modal-module/au-modal/au-modal.component";

// jasmine is our test framework

describe('AppComponent', () => {

  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      el: DebugElement,
      modal: DebugElement;

  // before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // add components to test here
        AppComponent,
        AuFaInputComponent,
        AuMdInputComponent,
        AuTabPanelComponent,
        AuTabComponent,
        AuModalOpenOnClickDirective,
        AuModalComponent
      ],
    }).compileComponents(); // tests only occur after components are compiled
  });

  // before each test
  beforeEach(() => {
    // initialize common params
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    modal = el.query(By.css('#testModal'));

    // run angular change detections
    fixture.detectChanges();
  });

  // each 'it' is a test
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should not add the modal to the page if the modal is closed', () => {
    expect(modal).toBeFalsy();
  });

  it('should open the modal when the test button is clicked', () => {
    fixture.debugElement.nativeElement.querySelector('#testButton').click();
    fixture.detectChanges();

    const openedModal = fixture.debugElement.nativeElement.querySelector('#testModal');
    expect(openedModal).toBeTruthy();
  })
});
