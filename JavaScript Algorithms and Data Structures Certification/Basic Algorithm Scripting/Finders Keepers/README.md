# Objective
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

## Challenges
- no challenges for this course
## Steps
- create a variable to keep track of the current number being checked by func.
- for loop to iterate through the length of my array and put current value into num
- check for the first num that meets the condition func. If so, return num. If not return undefined.
- console.log(findElement([1, 2, 3, 4], num => num % 2 === 0)); will return 2
- console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })); will return undefined

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers)
