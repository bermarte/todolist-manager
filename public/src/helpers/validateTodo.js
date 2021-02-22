'use strict';

/**
 * @param  { string } text
 * helpers function - check if input is empty or bigger than maxlength
 */
export function validationText(text){
    const maxlength = 34
    if (text.trim() !== '' && text.length <= maxlength) {
        return true
    } else return false
}