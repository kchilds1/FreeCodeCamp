# Objective
The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

## Steps
- Created a new variable mappedWatchList to map a copy of the watchList array without affecting the original array.
- After creating the new variable, I console.log mappedWatchList to make sure it mapped correctly.
- Then I modified mappedWatchList to only show the title and the imdbRating of the objects.
- I varied the properties are correct.
- Created another variable called filteredList, which uses a filter method on mappedWatchList to find objects within the array that are greater than or equal to 8.0.
- The code didn't pass after running the test.  It looks like I need to change the imdbRating key to rating, then rerun the tests.
- I changed const mappedWatchList = watchList.map(obj => ({Title: obj.Title, imdbRating: obj.imdbRating })); to const mappedWatchList = watchList.map(obj => ({"title": obj.Title, "rating": obj.imdbRating})); and mappedWatchList.imdbRating to mappedWatchList.rating for the filteredList function.