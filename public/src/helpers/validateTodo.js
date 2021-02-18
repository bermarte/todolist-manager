// helpers function

export function validationText (text){
    if (text.trim() !== '' && text.length < 60) {
        return true
    } else return false
}