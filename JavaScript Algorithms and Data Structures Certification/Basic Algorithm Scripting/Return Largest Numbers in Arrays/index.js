function largestOfFour(arr) {
    //console.log(arr)
    //created a variable calling it output to store my returned results.
    let output = [];
    //for loop to iterate through the outer array
    for(let i = 0; i < arr.length; i++ ){
      //console.log(arr[i]);
      //All 4 loops are being set to aNumber
       let aNumber = arr[i];
       /*variable is being used to store the highest number of each sub array
       setting subArrayHighestValue to -Infinity instead of 0 because 0 is greater than any negative number we might have in an array*/
       let subArrayHighestValue = -Infinity;
       //console.log(aNumber)
       //for loop is going to iterate through the sub arrays
       for (let j = 0; j < aNumber.length; j++){
         //console.log(aNumber[j]);
         //if statement is used in order to get the highest number
         //console.log(subArrayHighestValue);
         if(subArrayHighestValue < aNumber[j]){
           subArrayHighestValue = aNumber[j];
           
         }
         //console.log(subArrayHighestValue)
       }
       //push the highest number to the output array
         output.push(subArrayHighestValue);
         //console.log(subArrayHighestValue)
    }
  return output;
  }
  
  //console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  //console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
