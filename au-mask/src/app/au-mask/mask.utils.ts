export const  TAB = 9,
              LEFT_ARROW =	37,
              RIGHT_ARROW = 39,
              BACKSPACE = 8,
              DELETE = 46;

export const SPECIAL_CHARACTERS = [" ", "/", "(", ")", "+", "\/", "-"];

/**
 * Provided an HTMLInputElement, a cursor position number, and a key:
 *    replace the current value of the element at the position given with the given key
 * @param input HTMLInputElement
 * @param position number
 * @param key string
 */
export function overWriteCharAtPosition(input: HTMLInputElement, position: number, key: string) {
  const currentValue = input.value;
  input.value = currentValue.slice(0, position) + key + currentValue.slice(position + 1);
}


