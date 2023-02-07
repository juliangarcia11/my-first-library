import {Directive, HostListener} from '@angular/core';

/**
 * Defines a referencable version of the 'app-au-fa-input input' HtmlInputElement
 */
@Directive({
  selector: 'app-au-fa-input input'
})
export class InputRefDirective {

  // track if the user's mouse is in this directive
  focus = false;

  constructor() { }

  /**
   * When user's mouse enters this directive, change focus to true
   */
  @HostListener('focus') onFocus(): void {
    this.focus = true;
  }

  /**
   * When user's mouse exits this directive, change focus to false
   */
  @HostListener('blur') onBlur(): void {
    this.focus = false;
  }
}
