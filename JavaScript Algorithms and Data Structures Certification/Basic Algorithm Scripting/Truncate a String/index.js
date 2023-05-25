function truncateString(str, num) {
    if(str.length > num){//finding out if str is larger than num
    //returning a copy of str only showing num number of str plus ...
      return str.slice(0, num) + "...";
    }else{
      //In case a string is passed as the second parameter of the function I will just return the first parameter str.
      return str;
    }
  };
  
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
