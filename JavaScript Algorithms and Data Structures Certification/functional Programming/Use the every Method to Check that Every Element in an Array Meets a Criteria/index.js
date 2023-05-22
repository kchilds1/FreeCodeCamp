function checkPositive(arr) {
    // Only change code below this line
  //checked every number with the every method withing the number parameter
  return arr.every(function(number) {
    //return false if any of the numbers are negative/true if all are positive
    return number > 0;
  });
  
  
    // Only change code above this line
  }
  
  console.log(checkPositive([1, 2, 3, -4, 5]));
  console.log(checkPositive([1, 2, 3, 4, 5]));
  console.log(checkPositive([1, -2, 3, -4, 5]));
