export function getEmailError(value:string) {
    if (value === "") {
        return "email can't be empty"
    }
    if (!value.includes('@')) {
        return "incorrect email"
    }
    return ''
}

export function getPasswordError(value:string) {
    if (value.length < 6) {
        return "password too short"
    }
    return ''
}