function nonMutatingConcat(original, attach) {
    // Only change code below this line
  const concatArray = original.concat(attach);
  
  return concatArray;
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);
  console.log(nonMutatingConcat(first,second));
