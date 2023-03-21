/*
DESCRIPTION:
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.
 */

// solution

function squareSum(ar) {
    let sum = 0
    for (let i = 0; i < ar.length; i++) {
        sum += ar[i] ** 2
    }
    return sum
}
console.log(squareSum([10, 445]))