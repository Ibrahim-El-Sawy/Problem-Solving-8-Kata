// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34
function opposite(num) {
    if (num < 0) { return num * -1 } else { return num }
}
console.log(opposite(-5))