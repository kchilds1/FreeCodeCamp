const squareList = arr => {
    // Only change code below this line
    //squareList is being check to filter for numbers greater than 0 and number is a whole number divisible by 1 with no remainder
    return arr
    .filter(num =>num > 0 && num % 1 === 0 ).map(num => Math.pow(num,2));//The map function is used to return the square root of the filtered values.
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
