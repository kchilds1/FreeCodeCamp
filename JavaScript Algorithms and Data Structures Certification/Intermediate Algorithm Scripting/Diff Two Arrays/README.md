# Objective
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

## Steps
- returned arr1 to get [ 1, 2, 3, 5 ]
- concatenate arr1 to arr2 getting [ 1, 2, 3, 5, 1, 2, 3, 4, 5 ]
- filter to see if item is not in arr1 or filter to see if item is not in arr2