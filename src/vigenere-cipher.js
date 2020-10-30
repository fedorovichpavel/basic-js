const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    direction = 'direct';
    constructor(value) {
        if (value === false) { this.direction = 'reverse'; }
    }

    encrypt(message, key) {
        let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        if (!message || !key) {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        let j = 0;
        for (let i = 0; i < message.length; i++) {
            if (alph.indexOf(message[i]) == -1) { result += message[i]; continue; }
            let a = alph.indexOf(message[i]);
            let b = alph.indexOf(key[j]);
            let c = (a + b);
            result += String.fromCharCode((c % 26) + 65);

            if (j === key.length - 1) { j = 0; } else { j++; }
        }

        if (this.direction === 'reverse') { return result.split('').reverse().join(''); }
        return result;
    }
    decrypt(message, key) {
        let alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        if (!message || !key) {
            throw new Error();
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        let result = '';
        let j = 0;

        for (let i = 0; i < message.length; i++) {
            if (alph.indexOf(message[i]) == -1) { result += message[i]; continue; }
            let a = alph.indexOf(message[i]);
            let b = alph.indexOf(key[j]);
            let c = (a - b) + 26;
            result += String.fromCharCode((c % 26) + 65);

            if (j === key.length - 1) { j = 0; } else { j++; }
        }
        if (this.direction === 'reverse') { return result.split('').reverse().join(''); }
        return result;
    }

}

module.exports = VigenereCipheringMachine;