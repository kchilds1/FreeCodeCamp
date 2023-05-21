Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Only change code below this line

    //for loop to go through all of the numbers in this array
  for(let i = 0; i< this.length; i++){
    //Push the callback function that passed (test function that passed: item => item * 2) as an argument to newArray from current array this
    newArray.push(callback(this[i], i, this))
  }
    // Only change code above this line
    return newArray;
  };
  console.log([23, 65, 98, 5, 13].myMap(item => item * 2));
