import {AfterContentInit, Component, ContentChild, Input} from '@angular/core';

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements AfterContentInit {

  @Input()
  icon?: string;

  // embedded <input #input> html elements
  @ContentChild('input')
  input!: HTMLInputElement;

  constructor() {  }

  ngAfterContentInit() {
    console.log('testing testing is input here:', this.input);
  }

  get classes(): { [key: string]: boolean; } {
    let cssClasses: { [key: string]: boolean; } = { };

    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }

    return cssClasses;
  }
}
