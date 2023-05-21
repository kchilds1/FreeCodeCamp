# Objective
Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

## Steps
- first I created a for loop to loop through all the elements
- create an if statement to callback the function being passed as an argument, access the elements at index i in the this array.
- if the element is divisible by 2 and the remainder 1, this would mean the if statement is a truthy true value.
- if if statement is true the element will be pushed to newArray. This process will keep going until we for loop through all elements in this array.

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-the-filter-method-on-a-prototype)
