//hello is going in as the str parameter
function reverseString(str) {
/*split letters of hello into their own string(example: (["h","e","l","l","o"])), then reversed the order of the letters,
after the reverse I joined the letters back into one string */
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
