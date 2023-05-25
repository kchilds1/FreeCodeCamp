function titleCase(str) {

    return str.toLowerCase().replace(/^(.)|\s+(.)/g, function(match) {
      return match.toUpperCase();
    });
  }
  
  console.log(titleCase("I'm a little tea pot"));
  console.log(titleCase("sHoRt AnD sToUt"));
  console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
  
