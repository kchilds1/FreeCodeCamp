function bouncer(arr) {
    //Used the Boolean function to filter for truthy values to return
    return arr.filter(Boolean);
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));
  console.log(bouncer(["a", "b", "c"]));
  console.log(bouncer([false, null, 0, NaN, undefined, ""]));
  console.log(bouncer([null, NaN, 1, 2, undefined]));
