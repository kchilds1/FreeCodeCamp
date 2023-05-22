function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort((a, b) => {
        /*if a is equal to b  return 0 meaning it is in the same order of the sort. If a>b return 1 a should be after b in the sorted array.If a not greater than
        b return -1 indicating that a should be before b */
      return a === b ? 0 : a > b ? 1 : -1;
    });
    // Only change code above this line
  }
  
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
