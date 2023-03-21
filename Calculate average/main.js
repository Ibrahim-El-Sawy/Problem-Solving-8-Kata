// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

/* Solution 1 */
function calculate_average(arr) {
    let t;
    t = eval(arr.join("+")) / arr.length;
    return arr.length === 0 ? console.log("0") : console.log(t);
}
calculate_average([2, 2, 12])
calculate_average([])
    /* solution 2 */
function calculate_average(arr) {
    return arr.length === 0 ? console.log(0) : console.log(arr.reduce((arc, current) => arc + current, 0) / arr.length)
}
calculate_average([2, 2, 12])
calculate_average([])