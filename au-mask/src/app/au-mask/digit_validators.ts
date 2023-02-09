/**
 * Type definition of a DigitValidator function
 */
type DigitValidator = (char: string) => boolean;

/**
 * Numeric Validator returns true if the char provided matches the regex: /[0-9]/
 * @param char
 */
const numericValidator = (char: string) => /[0-9]/.test(char);

/**
 * Lowercase Validator returns true if the char provided matches the regex: /[a-z]/
 * @param char
 */
const lowerCaseValidator = (char: string) => /[a-z]/.test(char);

/**
 * Uppercase Validator returns true if the char provided matches the regex: /[A-Z]/
 * @param char
 */
const upperCaseValidator = (char: string) => /[A-Z]/.test(char);

/**
 * Number Range Validator returns true if the char provided is a number under the provided maxValue
 * @param maxValue
 * @param char
 */
const numberRangeValidator = (maxValue: number, char: string) => numericValidator(char) && parseInt(char) <= maxValue;

/**
 * Any Validator returns true when provided a char
 * @param char
 */
const anyValidator = (char: string) => true;

/**
 * Never Validator returns false when provided a char
 * @param char
 */
export const neverValidator = (char: string) => false;


/**
 * Map of all mask digit validator functions
 */
export const maskDigitValidators: {[key: string]: DigitValidator} = {
  'a': lowerCaseValidator,
  'A': upperCaseValidator,
  '*': anyValidator
};
// programmatically add to the validator map for every digit 0-9
for (let i = 0; i <= 9; i++) {
  maskDigitValidators[i] = numberRangeValidator.bind(undefined, i);
}
