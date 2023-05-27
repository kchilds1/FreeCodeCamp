# Objective
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

## Challenges
-  I was unaware of the Math.max() and Math.min() function and found this with ChatGPT. These functions will get the max and the min number in the array.

## Steps
- get the highest number in the array 
- check value console.log(max);
- get the lowest number in the array
- check value console.log(min);
- created variable to store sum of numbers between max and min
- Created for loop to iterate min to max and increment until i is equal to max
- console.log(i); to make sure for loop is iterating the correct amount of times.
- within the for loop I added all numbers min to max.
- returned the result of the for loop

## Course can be found at[freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range)
