function frankenSplice(arr1, arr2, n) {
    //created new array to store the return
    let newArr = [];
    //push a copy of arr2 from first number to n
    //the ... is to get rid of the extra array around the pushed value
    newArr.push(...arr2.slice(0,n));
    console.log(newArr);
    //push arr1 to newArr
    newArr.push(...arr1);
    console.log(newArr);
    //push a copy of arr2 from n to the length of arr2
    newArr.push(...arr2.slice(n,arr2.length));
    
    return newArr;
  }
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
