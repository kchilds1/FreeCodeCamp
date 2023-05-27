function sumAll(arr) {
    //get the highest number in the array
    let max = Math.max(arr[0], arr[1]);
    //console.log(max);
    let min = Math.min(arr[0], arr[1]);
    //console.log(min);
    //created variable to store sum of numbers between max and min
    let numBetweenMaxMin = 0;
    //Created for loop to iterate min to max and increment until i is equal to max
    for(let i = min;i <= max; i++){
      //console.log(i);
      //Add all numbers min to max
      numBetweenMaxMin += i;
    }
    //return sum of all number min to max
    return numBetweenMaxMin;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([1, 4])); 
  console.log(sumAll([1, 4])); 
  console.log(sumAll([4, 1])); 
  console.log(sumAll([5, 10])); 
  console.log(sumAll([10, 5]));
