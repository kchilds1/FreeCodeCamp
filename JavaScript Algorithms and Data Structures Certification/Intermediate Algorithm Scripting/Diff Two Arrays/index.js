function diffArray(arr1, arr2) {
    //returned arr1 to get [ 1, 2, 3, 5 ]
    return arr1.
    //concat arr1 to arr2 getting [ 1, 2, 3, 5, 1, 2, 3, 4, 5 ]
    concat(arr2).
    //filter to see if item is not in arr1 or filter to see if item is not in arr2.
    filter(item => !arr1.includes(item) || !arr2.includes(item));
  
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
  console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
