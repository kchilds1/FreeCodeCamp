# Objective
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

## Challenges
- What I had to do was to push parts of the arrays to the return variable one piece at a time.  The biggest challenge was removing the numbers out of the sub arrays.  I was able to do that by adding ...  Example: instead of newArr.push(arr2.slice(0,n)); I did newArr.push(...arr2.slice(0,n));
## Steps
- created new array to store the return
- push a copy of arr2 from first number to n the ... is to get rid of the extra array around the pushed value
- console.log(newArr); to make sure it returned 0,n value
- push arr1 to newArr
- console.log(newArr); to make sure all of arr1 was added to newArr
- push a copy of arr2 from n to the length of arr2

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice)
