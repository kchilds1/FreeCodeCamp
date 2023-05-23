# Objective
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.

# Steps
- originally I set the numForFactorial = 0 but kept getting 0 in my console.log because anything multiplied by 0 would be zero. So instead of setting it to 0, I set it to 1.
- In my for loop I set let i = 1 for the same reason I set numForFactorial to 1.
- Also in the for loop instead of i < num as if i = 0, I used i<= num to include 1 in the loop. Then for loop will loop and increment on the next loop.
- I checked to make sure my for loop was looping correctly by console.log(i)
- multiply numForFactorial by i.
-the return numForFactorial.  If 5 was the parameter put into the function as a parameter, then numForFactorial would be 120 since 1 * 2 * 3 * 4 * 5 = 120.

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number)