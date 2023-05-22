# Objective
Fill in the urlSlug function so it converts a string title and returns the hyphenated version for the URL. You can use any of the methods covered in this section, and don't use replace. Here are the requirements:

The input is a string with spaces and title-cased words

The output is a string with the spaces between words replaced by a hyphen (-)

The output should be all lower-cased letters

The output should not have any spaces

## Steps
- First I created a variable titleSplit that split where the space were.
- then I joined dashes and converted text to lowercase
- After returning the output I noticed when I console.log(urlSlug(" Winter Is  Coming")); the output showed -winter-is--coming instead of winter-is-coming.
- I added a trim method, but it only removed the beginning -.  Now the output is winter-is--coming for console.log(urlSlug(" Winter Is  Coming")).
- I added regular expression /\s+/ to the split method in order to remove the whitespace between is and coming.  The removal of whitespace is done before the join.

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/apply-functional-programming-to-convert-strings-to-url-slugs)