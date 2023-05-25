function booWho(bool) {
    //created if statement to see if bool is either true or false
    if(bool === true || bool === false){
      //if bool contains true or false return true
    return true;
    //If bool isn't true or false return false
  }else{
    return false;
   }
  };
  console.log(booWho(null));
  console.log(booWho(true));
  console.log(booWho(false));
  console.log(booWho([1, 2, 3]));
  console.log(booWho([].slice));
