# Objective

Return the length of the longest word in the provided sentence.

Your response should be a number.

## Steps
- first I used trim, replace to get rid of any white space that might be found in the parameter value. Then split the string into word strings.
- Created maxWords variable to store the longest word value.
- The if statement will compare maxWords to the word[i] in the loop. If the word[i] is longer that the current maxWords, then it will replace the current value.
- After finishing the loop the longest word will be returned.

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string)