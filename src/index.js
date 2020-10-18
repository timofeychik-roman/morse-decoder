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
    ' ':      ' '
};

function decode(expr) {
    // write your solution here
    let n = 0;
    let length = expr.length / 10;
    let sub = "";
    let substr = "";
    let temp = ""
    let s = "";
    let morse = [];
    for (let i = 0; i < length; i++) {
        sub = expr.slice(n, n + 10);
        if (sub == "**********") {
            morse.push(" ");
            n += 10;
            continue;
        }
        substr = "";
        for (let j = 0; j < 5; j++) {
            temp = sub.slice(j * 2, j * 2 + 2);
            if (temp == "10")
                substr += ".";
            if (temp == "11")
                substr += "-";
        }
        morse.push(substr);
        n += 10;
    }
    for (let i = 0; i < morse.length; i++)
        s += MORSE_TABLE[morse[i]];
    return s;
}

module.exports = {
    decode
}