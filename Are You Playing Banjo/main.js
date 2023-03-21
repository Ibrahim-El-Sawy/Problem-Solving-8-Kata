/* 
DESCRIPTION:
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
*/

// solution 1
function areYouPlayingBanjo(name) {

    if (name[0].toUpperCase() === "R") { return name + " plays banjo" } else { return name + " does not play banjo" }
}