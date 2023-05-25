# Objective
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

## Challenges
- I had issues understanding the instructions, because I didn't know what Truncate meant for JavaScript. I had to look it up to find out that truncating a string sets a limit on the number of characters to display, usually to save space.
- Passing truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) was undefined, because num is a sting in this case.  In this case I will need to just return the string.

## Steps
- Added an if statement to truncateString function that finds out if the length of str is larger than num.
- if length of str is greater that num, A copy of str only showing num number of str plus "..." will return.
- In case a string is passed as the second parameter of the function I made an else statement to return the first parameter str.

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string)
