function findLongestWordLength(str) {
    /*first I used trim, replace to get rid of any white space that might be found in the parameter value. Then split the string into word strings*/
    let words = str.trim().replace(/\s+/g, " ").split(" ");
    //Created maxWords variable to store the longest word value.
    let maxWords = 0;
  // Looping to check the length of all words
    for(let i = 0; i < words.length; i++){
      /*The if statement will compare maxWords to the word[i] in the loop. If the word[i] is longer that the current maxWords, then it will replace the current value.*/
      if(words[i].length > maxWords){
        maxWords = words[i].length;
        
      }
    }
    //After finishing the loop the longest word will be returned.
    return maxWords;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
