/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

// Solution 1

function position(letter) {
    let ar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < ar.length; i++) {
        if (letter.toLowerCase() === ar[i]) {
            return `Position of alphabet: ${i + 1}`
        }
    }
}
console.log(position("s"))