function splitify(str) {
    // Only change code below this line
    //the split is splitting the str parameter by using regular expressions for comma, dash, and space as the delimiters
  const splitValue = str.split(/,|-| /);
  return splitValue;
  
    // Only change code above this line
  }
  
  console.log(splitify("Hello World,I-am code"));
