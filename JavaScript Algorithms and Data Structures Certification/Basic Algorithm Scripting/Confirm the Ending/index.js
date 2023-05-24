function confirmEnding(str, target) {
    /*without using .endsWith I used slice method to copy this string, removing the target from the string, and checking if the sting ends with the target sting. If it does then a true value will be returned. If not, false*/
    return str.slice(str.length-target.length) === target;
  }
  
  console.log(confirmEnding("Bastian", "n"));
  console.log(confirmEnding("Congratulation", "on"));
  console.log(confirmEnding("Connor", "n"));
  console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
  console.log(confirmEnding("He has to give me a new name", "name"));
  console.log(confirmEnding("Open sesame", "same"));
  console.log(confirmEnding("Open sesame", "sage"));
  console.log(confirmEnding("Open sesame", "game"));
  console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
  console.log(confirmEnding("Abstraction", "action"));
