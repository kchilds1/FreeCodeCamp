function sentensify(str) {
    // Only change code below this line
  
  //returned a split of str using a shorthand character class \W delimiter. This will match all of the dashes for the split. Then I joined the stings to make one string using the join method
  return str.split(/\W/).join(" ");
  
  
    // Only change code above this line
  }
  
  console.log(sentensify("May-the-force-be-with-you"));
  console.log(sentensify("The.force.is.strong.with.this.one"));
  console.log(sentensify("There,has,been,an,awakening"));
  
