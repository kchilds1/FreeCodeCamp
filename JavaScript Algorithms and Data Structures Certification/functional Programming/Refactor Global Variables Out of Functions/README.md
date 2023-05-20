# Objective 
Rewrite the code so the global array bookList is not changed inside either function. The add function should add the given bookName to the end of the array passed to it and return a new array (list). The remove function should remove the given bookName from the array passed to it.

Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

## Steps
### For the Add function
- added another parameter called arr.
- created a variable called copyList giving it an spread array value [...arr];
- Pushed new bookName to copyList array.
- created a newBookList variable and console.logged it in order to test the add function is working correctly.

### For the remove function
- Added another parameter called arr.
- Created a variable called newList giving it an spread array value [...arr];
- Everything that was setup as bookList withing the remove function was changed to the variable newList