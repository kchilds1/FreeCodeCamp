# Objective
Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.

## Steps
- I tried to create a variable called splitValue and use the split method on the str parameter using I to split by multiple delimiters.  It split, but it ended up removing the I when I console.log(splitify("Hello World,I-am code")); as well.
- Turns out I was using the wrong character instead of using I I should have used |.  The console.log looks better, but I'm still missing space as one of my delimiters.
- instead of having const splitValue = str.split(/,|-/);  I need to add another | and space between / /in order to include space between words in the string.  Example: const splitValue = str.split(/,|-| /);

## Course can be found at [freecodecamp](Split a String into an Array Using the split Method)