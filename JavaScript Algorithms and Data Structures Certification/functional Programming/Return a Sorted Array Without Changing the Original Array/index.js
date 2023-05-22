const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  //in the return I concatenated the nonMutatingSort parameter with an empty array so that I don't mutate the original array. The sort method is used with the comparison function to determine the order of the numbers.
return [].concat(arr).sort(function(a, b){ 
    return a - b;
});
  // Only change code above this line
}
console.log(nonMutatingSort([1, 30, 4, 21, 100000]));
nonMutatingSort(globalArray);
