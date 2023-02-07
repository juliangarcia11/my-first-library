import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AuFaInputComponent} from "./lib/au-fa-input/au-fa-input.component";
import {InputRefDirective} from "./lib/common/input-ref.directive";

// jasmine is our test framework

describe('AppComponent', () => {

  // before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        // add components to test here
        AppComponent, AuFaInputComponent, InputRefDirective
      ],
    }).compileComponents(); // tests only occur after components are compiled
  });

  // each 'it' is a test
  it('should create the app', () => {
    // create a component to test
    const fixture = TestBed.createComponent(AppComponent);
    // access component param
    const app = fixture.componentInstance;
    // execute test
    expect(app).toBeTruthy();
  });
});
