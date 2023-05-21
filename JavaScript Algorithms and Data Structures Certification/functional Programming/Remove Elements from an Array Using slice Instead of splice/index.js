function nonMutatingSplice(cities) {
    // Only change code below this line
  const locations = cities.slice(0, 3);
    return locations;
  
    // Only change code above this line
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);
  console.log(nonMutatingSplice(inputCities));
