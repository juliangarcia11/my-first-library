import {AfterContentInit, Component, ContentChild, HostBinding, Input} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input()
  icon?: string;

  // embedded <input #input> html elements
  @ContentChild(InputRefDirective)
  input!: InputRefDirective;

  constructor() {  }

  ngAfterContentInit() {
    if(!this.input) {
      console.error('DEV ERROR: The app-au-fa-input requires an input element inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus(): boolean {
    return this.input ? this.input.focus : false;
  }

  get classes(): { [key: string]: boolean; } {
    let cssClasses: { [key: string]: boolean; } = { };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
