import {AfterContentInit, Component, ContentChild, HostBinding, Input} from '@angular/core';
import {InputRefDirective} from "../common/input-ref.directive";

@Component({
  selector: 'app-au-md-input',
  templateUrl: './au-md-input.component.html',
  styleUrls: ['./au-md-input.component.scss']
})
export class AuMdInputComponent implements AfterContentInit {

  @Input()
  icon?: string;

  @ContentChild(InputRefDirective)
  input!: InputRefDirective;

  ngAfterContentInit() {
    if (!this.input) {
      console.error('DEV ERROR: The au-md-input requires an input html element inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus(): boolean {
    return this.input ? this.input.focus : false;
  }
}
