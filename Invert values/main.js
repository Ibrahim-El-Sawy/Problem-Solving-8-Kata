// DESCRIPTION:
// Given a set of numbers,
// return the additive inverse of each.Each positive becomes negatives,
// and the negatives become positives.

// solution 1 
function invert_values(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) { arr[i] = arr[i] * -1 } else(arr[i] = arr[i] * -1)
    }
    console.log(arr)
}
invert_values([10, -12, 545, 465, -2, -6]);

// solution 2

function invert_values(arr) {
    console.log(arr.map((e) => e * -1))
}
invert_values([10, -12, 545, 465, -2, -6]);