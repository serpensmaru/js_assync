function getPasswordChecker(password) {
    const pas = password;
    return function (p) {
        if (pas == p) {
            return true
        } else {
            return false
        }
    }
}

let valid_password = getPasswordChecker("qwe")

console.log(valid_password("qwe"))
console.log(valid_password("qqq"))
