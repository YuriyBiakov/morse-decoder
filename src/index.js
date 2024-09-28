const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const MORSE_SYMBOLS = {
    '10':  '.',
    '11':  '-',
    '00':  ''
}

function decode(expr) {
    const exprLength = expr.length;
    const amountOfSym = exprLength / 10;
    let result = '';

    for (let i = 0; i < amountOfSym; i ++){
        if (expr[i * 10] === '*'){
            result += ' ';
        } else 
        {
            let humanSymbol = '';
            let morseLetter = '';
            for (let y = 0; y < 10; y += 2){
                const index = i * 10 + y;
                const morseNumberSymbol = expr[index] + expr[index + 1];
                let morseSymbol = MORSE_SYMBOLS[morseNumberSymbol];
                morseLetter += morseSymbol;
            }
            humanSymbol = MORSE_TABLE[morseLetter];
            result += humanSymbol;
        }
    }
    return result;
}

module.exports = {
    decode
}