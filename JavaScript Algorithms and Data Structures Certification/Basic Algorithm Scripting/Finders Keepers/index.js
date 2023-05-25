function findElement(arr, func) {
  // create a variable to keep track of the current number being checked by func
  let num = 0;
  //for loop to iterate through the length of my array
  for(let i = 0;i < arr.length; i++){
    //putting current values into num
  num = arr[i];
  //console.log(num)
  //check for the first num that meets the condition func
  if(func(num)){
    //return the first num that meets the func condition
    return num;
  }
}
//If no num meet the condition then return undefined
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));
