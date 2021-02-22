'use strict';

// helpers function
export function validationText(text){
    const maxlength = 34
    if (text.trim() !== '' && text.length <= maxlength) {
        return true
    } else return false
}