/*
Create a function called shortcut to remove the lowercase 
vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

// solution 1
function shortcut(string) {
    let newArr = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] != "e" && string[i] != "a" && string[i] != "i" && string[i] != "o" && string[i] != "u") {
            newArr.push(string[i])
        }

    }
    return newArr.join("");
}
console.log(shortcut("string"))

// solution 2
function shortcut(string) {
    let vowel = ["a", "e", "i", "o", "u"]
    let newArr = []
    for (let i = 0; i < string.length; i++) {
        if (!vowel.includes(string[i])) {
            newArr.push(string[i])
        }

    }
    return newArr.join("");
}