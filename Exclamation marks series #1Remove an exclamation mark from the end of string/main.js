/* 
DESCRIPTION:
Description:
Remove an exclamation mark from the end of a string. 
For a beginner kata, you can assume that the input data
is always a string, no need to verify it.

Examples
remove("Hi!") == "Hi"
remove("Hi!!!") == "Hi!!"
remove("!Hi") == "!Hi"
remove("!Hi!") == "!Hi"
remove("Hi! Hi!") == "Hi! Hi"
remove("Hi") == "Hi"
*/

// solution  1

function remove(string) {
    let ar = []

    if (string[string.length - 1] === "!") {
        for (let i = 0; i < string.length - 1; i++) {
            ar.push(string[i])
        }
        return ar.join("");
    } else {
        return string;
    }
}
console.log(remove("Hi!!"))
console.log(remove("Hi!"))
console.log(remove("Hi!!!"))
console.log(remove("!Hi"))
console.log(remove("!Hi!"))
console.log(remove("Hi! Hi!"))
console.log(remove("Hi"))