# Objective 
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

## Steps
- I created a for loop to go through all of the numbers in this array
- Push the callback function that passed (test function that passed: item => item * 2) as an argument to newArray from current array this
- return newArray
- console.log([23, 65, 98, 5, 13].myMap(item => item * 2)) which returned [ 46, 130, 196, 10, 26 ].

## Course found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype)
