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
      el: DebugElement;

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
    // create a component to test
    fixture = TestBed.createComponent(AppComponent);
    // access component param
    component = fixture.componentInstance;
    // defined debug element
    el = fixture.debugElement;
  });

  // each 'it' is a test
  it('should create the app', () => {
    // execute test
    expect(component).toBeTruthy();
  });

  it('should create a font awesome email input', () => {
    const emailField = el.query(By.css('#email-field'));

    expect(emailField).toBeTruthy();
    expect(emailField.query(By.css('i.icon.fa.fa-envelope'))).toBeTruthy();
  })
});
