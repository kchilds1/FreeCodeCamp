# Objective
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

## Challenges
- I had to ask ChatGPT what the regular expression /^(.)|\s+(.)/g meant.
/ indicates the start of the regular expression pattern.
^ is a caret symbol that matches the beginning of the string.
(.) is a capturing group that matches any character except a newline character.
| is the alternation operator, which allows either the pattern before or after it to match.
\s+ matches one or more whitespace characters.
. matches any character except a newline character.
/ marks the end of the regular expression pattern.
g is the global flag that allows multiple matches to be found.
## Steps
- convert string to lowercase
- use regular expression with replace to match the first char. of each word or the char. following  whitespace. 
- the callback function passed to replace() converts the matched characters to uppercase using toUpperCase()

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence)
