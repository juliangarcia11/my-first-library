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
 * Map of all mask digit validator functions
 */
export const maskDigitValidators: {[key: string]: DigitValidator} = {
  '9': numericValidator
};
