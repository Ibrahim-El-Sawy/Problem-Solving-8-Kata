/*
DESCRIPTION:
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

// Solution 1

function noBoringZeros(n) {
    let num = n.toString().split("")
    for (let i = num.length - 1; i < num.length; i--) {
        if (num[i] === "0") {
            num.pop(num[i])
        } else {
            break;
        }
    }
    return Number(num.join(""))
}
console.log(noBoringZeros(-150000))