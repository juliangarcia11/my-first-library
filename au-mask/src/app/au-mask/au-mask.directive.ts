import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {
  BACKSPACE,
  DELETE,
  LEFT_ARROW,
  overWriteCharAtPosition,
  RIGHT_ARROW,
  SPECIAL_CHARACTERS,
  TAB
} from "./mask.utils";
import {maskDigitValidators} from "./digit_validators";

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

    const key = String.fromCharCode(keyCode);
    const cursorPos = this.input.selectionStart;

    if (!cursorPos) return;


    // if the keyCode is one of the following, handle a cursor movement
    switch (keyCode) {
      case LEFT_ARROW:
        this.handleMoveCursorLeft(cursorPos);

        return;
      case RIGHT_ARROW:
        this.handleMoveCursorRight(cursorPos);
        return;
    }

    // else if the keyCode matches its digitValidator, add the key to the input and move the cursor one position to the right
    const maskDigit = this.mask.charAt(cursorPos);
    const digitValidator = maskDigitValidators[maskDigit];

    if (digitValidator(key)) {
      // use the function from mask.utils.ts
      overWriteCharAtPosition(this.input, cursorPos, key);
      this.handleMoveCursorRight(cursorPos);
    }
  }

  /**
   * Move the cursor position on the input to the left by one index based on the cursor position provided
   * @param cursorPos number
   * @private
   */
  private handleMoveCursorLeft(cursorPos: number) {
    // get the character before the cursor
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);
    let pos = valueBeforeCursor.length - 1;
    // previous position is the current position minus how many characters we need to travel left to not hit one in the special characters list
    const previousPos = pos - valueBeforeCursor.split('').reverse().findIndex((value, i) => {
      return !SPECIAL_CHARACTERS.includes(value);
    });

    // if a previous position was found
    if (previousPos >= 0) {
      // place the cursor at the particular position in the input
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  /**
   * Move the cursor position on the input to the right by one index based on the cursor position provided
   * @param cursorPos number
   * @private
   */
  private handleMoveCursorRight(cursorPos: number) {
    // get the character after the cursor
    const valueAfterCursor = this.input.value.slice(cursorPos + 1);
    // next position is the current position plus how many characters we need to travel right to not hit one in the special characters list
    const nextPos = valueAfterCursor.split('').findIndex((value, i) => {
      return !SPECIAL_CHARACTERS.includes(value);
    });

    // if a next position was found
    if (nextPos >= 0) {
      // calculate the new position of the cursor
      const newCursorPos = cursorPos + nextPos + 1;
      // place the cursor at the particular position in the input
      this.input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  /**
   * Using the mask param, build a placeholder string made from chars from the SPECIAL_CHARACTERS list and underscores
   *     for example ---> '(999) 999-9999' ===> '(___) ___-____'
   * @private
   */
  private buildPlaceHolder(): string {
    // create an iterable string array
    const chars = this.mask.split('');
    // for every char in chars, combine the preceding result with an item from the SPECIAL_CHARACTERS list or an '_'
    // for example ---> '(999) 999-9999' ===> '(___) ___-____'
    return chars.reduce((result, char) => {
      return result += SPECIAL_CHARACTERS.includes(char) ? char : '_';
    }, '');
  }
}
