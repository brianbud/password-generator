const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let pwOneDisplay = document.getElementById("password1")
let pwTwoDisplay = document.getElementById("password2")
let firstPassword = []
let secondPassword = []

function getPassword() {
    reset()
    getFirstPw()
    getSecondPw()
    pwOneDisplay.textContent = firstPassword.join('')
    pwTwoDisplay.textContent = secondPassword.join('')
}

function reset() {
    firstPassword = []
    secondPassword = []
}

function getFirstPw() {
    for (let i = 0; i < 16; i++) {
        let randPassword = characters[getRandomNum()]
        firstPassword.push(randPassword)
    }
}

function getSecondPw() {
    for (let i = 0; i < 15; i++) {
        let randPassword = characters[getRandomNum()]
        secondPassword.push(randPassword)
    }
}

function getRandomNum() {
    return Math.floor(Math.random() * characters.length) + 1
}





