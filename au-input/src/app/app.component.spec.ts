import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AuFaInputComponent} from "./lib/au-fa-input/au-fa-input.component";
import {InputRefDirective} from "./lib/common/input-ref.directive";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

// jasmine is our test framework

describe('AppComponent', () => {

  let component: AppComponent,
      fixture: ComponentFixture<AppComponent>,
      el: DebugElement,
      emailField: DebugElement;

  // before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // add components to test here
        AppComponent, AuFaInputComponent, InputRefDirective
      ],
    }).compileComponents(); // tests only occur after components are compiled
  });

  // before each test
  beforeEach(() => {
    // initialize common params
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    emailField = el.query(By.css('#email-field'));

    // run angular change detections
    fixture.detectChanges();
  });

  // each 'it' is a test
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should create a font awesome email input', () => {
    expect(emailField).toBeTruthy();
  });

  it('should include the correct email icon in the email input', () => {
    console.log('my test!');
    console.log(emailField.nativeElement.outerHTML);

    expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
  });

  it('should have projected the correct test input inside the email field', () => {
    expect(emailField.query(By.css('input.test-class'))).toBeTruthy();
  });
});
