function sliceArray(anim, beginSlice, endSlice) {
    // Only change code below this line
  //slice method used to element with index 1 to element with index 3.  In this case it would be Dog and Tiger going into new Array
    const newArray = anim.slice(beginSlice, endSlice);

    return newArray;
    // Only change code above this line
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);
  console.log(sliceArray(inputAnim, 1, 3));
