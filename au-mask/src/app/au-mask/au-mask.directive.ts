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
import {maskDigitValidators, neverValidator} from "./digit_validators";

@Directive({
  selector: '[au-mask]'
})
export class AuMaskDirective implements OnInit {

  @Input('au-mask')
  mask: string = '';

  input: HTMLInputElement;
  fullFieldSelected: boolean = false;

  constructor( el: ElementRef ) {
    // hold a reference to the input element
    this.input = el.nativeElement;
  }

  ngOnInit(): void {
    // set the initial input value as the page loads up
    this.input.value = this.buildPlaceHolder();
  }

  /**
   * On selection events, set the flag to true if the full input field is selected
   * @param $event
   */
  @HostListener('select', ['$event'])
  onSelect($event: UIEvent): void {
    this.fullFieldSelected = this.input.selectionStart === 0 &&
      this.input.selectionEnd === this.input.value.length;
  }

  /**
   * On key down events when the meta nor control keys are currently pressed,
   *    if the key was not the tab key, custom handle the event
   * @param $event KeyboardEvent
   * @param keyCode
   */
  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode: number): void {
    // if the alt or ctrl keys are pressed, bail and let the event handle itself
    if ($event.metaKey || $event.ctrlKey) { return; }

    // if any key but the tab key was pressed, prevent its default action
    if (keyCode !== TAB) {
      // stop default handling
      $event.preventDefault();
    }

    // retrieve info about the key pressed
    const key = String.fromCharCode(keyCode);
    const cursorPos = this.input.selectionStart;

    // as long as the cursor position is not null, continue
    if (cursorPos == null) return;

    // if the full field is selected
    if (this.fullFieldSelected) {
      // reset the input value to the placeholder value
      this.input.value = this.buildPlaceHolder();

      // find the first underscore in the placeholder
      const firstPlaceholderPos = this.input.value.split('').findIndex(char => char === '_');

      // move the cursor to that position
      this.input.setSelectionRange(firstPlaceholderPos, firstPlaceholderPos);
    }

    // if the keyCode is one of the following, handle a cursor movement
    switch (keyCode) {
      case LEFT_ARROW:
        this.handleMoveCursorLeft(cursorPos);
        return;

      case RIGHT_ARROW:
        this.handleMoveCursorRight(cursorPos);
        return;

      case BACKSPACE:
        this.handleBackspace(cursorPos);
        return;

      case DELETE:
        this.handleDelete(cursorPos);
        return;
    }

    // else if the keyCode matches its digitValidator, add the key to the input and move the cursor one position to the right
    const maskDigit = this.mask.charAt(cursorPos);
    // use a defined validator or the neverValidator if no matching validator is found
    const digitValidator = maskDigitValidators[maskDigit] || neverValidator;

    // if the validator returns true
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
    const previousPos = this.calculatePreviousCursorPosition(cursorPos);

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
   * Remove the character before the cursor position and replace it with the corresponding mask placeholder char
   * @param cursorPos
   * @private
   */
  private handleBackspace(cursorPos: number) {
    const previousPos = this.calculatePreviousCursorPosition(cursorPos);

    // if a previous position was found
    if (previousPos >= 0) {
      // use the function from mask.utils.ts
      overWriteCharAtPosition(this.input, cursorPos, '_');
      // place the cursor at the particular position in the input
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }


  /**
   * Remove the character after the cursor position and replace it with the corresponding mask placeholder char
   * @param cursorPos
   * @private
   */
  private handleDelete(cursorPos: number) {
    overWriteCharAtPosition(this.input, cursorPos, '_');
    this.input.setSelectionRange(cursorPos, cursorPos);
  }

  /**
   * Given a current cursor position, calculate the proper position before it that does not contain a char from the
   * SPECIAL_CHARACTERS list
   * @param cursorPos
   * @private
   */
  private calculatePreviousCursorPosition(cursorPos: number) {
    // get the character before the cursor
    const valueBeforeCursor = this.input.value.slice(0, cursorPos);
    let pos = valueBeforeCursor.length - 1;
    // previous position is the current position minus how many characters we need to travel left to not hit one in the special characters list
    return pos - valueBeforeCursor.split('').reverse().findIndex((value, i) => {
      return !SPECIAL_CHARACTERS.includes(value);
    });
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
