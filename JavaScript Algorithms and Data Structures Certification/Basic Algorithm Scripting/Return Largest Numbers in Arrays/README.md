# Objective
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

## Steps
- I created a variable calling it output to store my returned results.
- console logged largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); to see what my results would be.
- created for loop to loop through the outer array
- console.log(arr[i]) to make sure my for loop is working correctly by looping 4 times for the amount of sub arrays I have in ([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]), then I put it into a variable called aNumber.
- created another for loop, this time to iterate through the sub arrays and when I console.log(aNumber[j]) I'm able to see everything in each sub array.
- I created another variable for highest number of each sub array.  This variable is called subArrayHighestValue and I set it to -Infinity instead of 0 so it will be able to work with negative numbers since 0 is greater than negative numbers.
- In the inner for loop I added an if statement to iterate though for the largest value
- I made a mistake and pushed subArrayHighestValue for each point and needed to push it at the end of the array.
- Pushed subArrayHighestValue at the end of the array, then returned the output.

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays)

