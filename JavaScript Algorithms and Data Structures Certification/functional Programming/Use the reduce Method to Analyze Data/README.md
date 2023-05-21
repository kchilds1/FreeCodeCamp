# Objective
The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

## Steps
- first I filtered for only Christopher Nolan movies
- I tried to use the reduce method in order to find the imdbRating total for Christopher Nolan movies, but ran into an issue where I couldn't add because the numbers were strings. So, I added a Number() to convert the imdbRating values to numbers.

## Course can be found at [freecodecamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data)
