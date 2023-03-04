// Using ASCII  code
// lowercase a to z is 97 to 122
// uppercase A to Z is 65 to 90
// 0 to 9 is 48 to 57
// special characters are 32 to 64, 91 to 96, 123 to 126, 145 to 149

const passwordBox = document.querySelector('.password-container')
const resetButton = document.querySelector('.reset')

function generateRandom(num1, num2) {
    let difference = num2 - num1
    let rand = Math.random()
    rand = Math.floor(rand * difference)

    rand = rand + num1

    return rand
}

let password = []

function createPassword() {
    let upperCase1 = String.fromCharCode(generateRandom(65, 90))
    password.push(upperCase1)
    let upperCase2 = String.fromCharCode(generateRandom(65, 90))
    password.push(upperCase2)
    let lowerCase1 = String.fromCharCode(generateRandom(97, 122))
    password.push(lowerCase1)
    let lowerCase2 = String.fromCharCode(generateRandom(97, 122))
    password.push(lowerCase2)
    let digit1 = String.fromCharCode(generateRandom(48, 57))
    password.push(digit1)
    let digit2 = String.fromCharCode(generateRandom(48, 57))
    password.push(digit2)
    let specialCharacter1 = String.fromCharCode(generateRandom(32, 64))
    password.push(specialCharacter1)
    let specialCharacter2 = String.fromCharCode(generateRandom(91, 96))
    password.push(specialCharacter2)
}

function showPassword() {
    createPassword()

    password.forEach(letter => {
        const tileElement = document.createElement('div')
        tileElement.classList.add('tile')
        tileElement.textContent = letter
        passwordBox.append(tileElement)
    })
}

showPassword()

resetButton.addEventListener('click', reset)

function reset() {
    console.log('clicked')
    password.forEach(letter => {
        const box = document.querySelector('.tile')
        box.textContent = ''
        passwordBox.append(box)
    })
    
    createPassword()
    
    password.forEach(letter => {
        setTimeout(() => {
            const box = document.querySelector('.tile')
            box.classList.add('flip')
            setTimeout(() =>{box.textContent = letter}, 500)
            passwordBox.append(box)
        }, 800)
    })

}

