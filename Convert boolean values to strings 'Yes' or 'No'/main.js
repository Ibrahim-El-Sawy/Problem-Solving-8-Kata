/*
DESCRIPTION:
Complete the method that takes a boolean value 
and return a "Yes" 
string for true, or a "No" string for false.
*/
function bool(i) {
    // solution 1
    if (i === true) { console.log("yes") } else { console.log("no") }
    // solution 2
    return i ? console.log("yes") : console.log("no")
}
bool(true)