/*
Write function RemoveExclamationMarks which removes 
all exclamation marks from a given string.
*/

// solution 1
function removeExclamationMarks(s) {
    let newStr = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] != "!") {
            newStr.push(s[i])
        }
    }
    return newStr.join("");
}
console.log(removeExclamationMarks("ibrahim!"))

// solution 2 
function removeExclamationMarks(s) {
    return s.replace(/[i]/g, "");
}