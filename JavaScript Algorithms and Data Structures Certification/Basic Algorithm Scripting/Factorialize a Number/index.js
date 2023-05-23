function factorialize(num) {
/*Set numForFactorial to 1 because anything multiplied by 0 would be zero and 1 should be the first number multiplied to get the factorial*/
  let numForFactorial = 1;
/*In my for loop I set let i = 1 for the same reason I set numForFactorial to 1. Also in the for loop instead of i < num as if i = 0, I used i<= num to include 1 in the loop. Then for loop will loop and increment on the next loop.*/
  for(let i = 1; i <= num; i++){
    //just console.log(i) to make sure my loop is looping correctly
    //console.log(i)
    //multiply numForFactorial by i.
    numForFactorial *= i;
  }
  //the return numForFactorial.  If 5 was the parameter put into the function as a parameter, then numForFactorial would be 120 since 1 * 2 * 3 * 4 * 5 = 120.
  return numForFactorial;
}

console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
