Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Only change code below this line
    //created a for loop to loop through all the elements
  for(let i = 0; i < this.length; i++){
    //create an if statement to callback the function being passed as an argument, access the elements at index i in the this array.
    if(callback(this[i], i, this) == true){
        //if if statement is true the element will be pushed to newArray. This process will keep going until we for loop through all elements in this array.
    newArray.push(this[i]);
    }
  }
    // Only change code above this line
    return newArray;
  };
  
  console.log([23, 65, 98, 5, 13].myFilter(item => item % 2))
