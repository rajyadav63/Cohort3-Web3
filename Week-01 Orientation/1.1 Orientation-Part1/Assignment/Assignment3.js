/*
Assignment #3
What if I ask you to find a nonce for the following input - 
harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
*/



const crypto = require('crypto')


function findHashWithPrefix(prefix) {
    let input = 0;

    while (true) {
        let inputStr = 'harkirat => Raman | Rs 100' + input.toString();
        const hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if (hash.startsWith(prefix)) {
            return { input: inputStr, hash: hash }
        }
        input++;
    }
}

const result = findHashWithPrefix('00000')
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
