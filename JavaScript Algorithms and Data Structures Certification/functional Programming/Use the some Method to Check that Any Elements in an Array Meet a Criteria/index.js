function checkPositive(arr) {
    // Only change code below this line
    //checking array to see if some number match a condition
  return arr.some(function(numbers) {
    //condition is true if number is positive/ false if number is negative
    return numbers > 0;
  });
  
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, 4, 5]));
  console.log(checkPositive([1, 2, 3, -4, 5]));
  console.log(checkPositive([-1, -2, -3, -4, -5]));
