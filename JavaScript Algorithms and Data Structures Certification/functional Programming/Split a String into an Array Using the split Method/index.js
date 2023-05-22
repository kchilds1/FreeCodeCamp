function splitify(str) {
  // Only change code below this line
const splitValue = str.split(/\.|,|-| /);
return splitValue;

  // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));
console.log(splitify("This.is.a-sentence"));
console.log(splitify("Earth-is-our home"));
