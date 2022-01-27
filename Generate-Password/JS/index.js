// dom Elements
const resultEle = document.getElementById('result')
const len = document.getElementById('len')
const upper = document.getElementById('uppercase')
const lower = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const generateBtn = document.getElementById('generate')
const cpyBtn = document.getElementById('clipboard')

// objects of fun
const randomFunc = {
    lower: getrandomLower,
    upper: getrandomUpper,
    number: getrandomNumbers,
    symbol: getrandomSymbols
}

// event of Generate-btn (generateBtn)
generateBtn.addEventListener('click', () => {

    const lenVal = Number(len.value)

    if(lenVal === 0){
        alert('Please Enter Length')
        return
    }

    const upperState = upper.checked
    const lowerState = lower.checked
    const numebrState = numbers.checked
    const symbolState = symbols.checked
    resultEle.innerText = (generatePassword(lenVal, upperState, lowerState, numebrState, symbolState))
})

// code for copy Button
cpyBtn.addEventListener('click', () => {
    const textArea = document.createElement('textarea')
    const password = resultEle.innerText

    if(!password){
        alert('Please, Click Generate Password')
        return
    }
    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert('Password Copied to Clipboard')
})


// GeneratePassword
function generatePassword(len, upper, lower, number, symbol) {
 
    let generatedPassword = ''
    const countType = upper + lower + number + symbol
    // console.log(countType)
    const TypeState = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0])

    if (countType === 0) { // if none of the type is checked
        return ''
    }

    for (let i = 0; i < len; i += countType) {
        TypeState.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, len)
    return finalPassword
}


// generator functions
function getrandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) // math.random generates random decimal numbers from 0-1, and we want from 1 to 26 therefor *26 and in acci code
    // lower letters are starts from 97 therfore +97
}

function getrandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getrandomNumbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getrandomSymbols() {
    const arrOfSym = "!@#$%^&*()_+=-{}[];:'<>,./?"
    return arrOfSym[Math.floor(Math.random() * arrOfSym.length)]
}

// console.log(getrandomSymbols())

// experiments

