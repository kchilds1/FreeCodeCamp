function repeatStringNumTimes(str, num) {
    //new variable was created to store new string being returned
    let newString = "";
    //for loop to loop through num number of times
    for(let i = 0; i < num; i++){
      //+= concatenates str onto newString num number of times
      newString += str;
    }
    //return the results of the for loop
    return newString;
  }
  
  console.log(repeatStringNumTimes("abc", 3));
