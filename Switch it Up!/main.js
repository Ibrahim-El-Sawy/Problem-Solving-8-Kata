// DESCRIPTION:
// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

/* solution 1 */

function switchItUp(number) {
    switch (number) {
        case number = 1:
            return "One"
            break;
        case number = 2:
            return "Two"
            break;
        case number = 3:
            return "Three"
            break;
        case number = 4:
            return "Four"
            break;
        case number = 5:
            return "Five"
            break;
        case number = 6:
            return "Six"
            break;
        case number = 7:
            return "Saven"
            break;
        case number = 8:
            return "Eight"
            break;
        case number = 9:
            return "Nine"
            break;
    }
}
console.log(switchItUp(2))