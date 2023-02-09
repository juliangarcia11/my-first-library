import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {BACKSPACE, DELETE, LEFT_ARROW, RIGHT_ARROW, SPECIAL_CHARACTERS, TAB} from "./mask.utils";

@Directive({
  selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

  @Input('au-mask')
  mask: string = '';

  input: HTMLInputElement;

  constructor(
    el: ElementRef
  ) {
    this.input = el.nativeElement;
  }

  ngOnInit(): void {
    // set the initial input value as the page loads up
    this.input.value = this.buildPlaceHolder();

  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode: number): void {

    if (keyCode !== TAB) {
      // stop default handling
      $event.preventDefault();
    }

  }

  /**
   * Using the mask param, build a placeholder string made from chars from the SPECIAL_CHARACTERS list and underscores
   * @private
   */
  private buildPlaceHolder(): string {
    const chars = this.mask.split('');
    return chars.reduce((result, char) => {
      return result += SPECIAL_CHARACTERS.includes(char) ? char : '_';
    }, '');
  }
}
