function add(x) {// when this function is called it will add x value which is 10.
    // Only change code below this line
   return (y) => {//when called return y value 20.
     return(z) => {//when called return z value 30.
       return x + y + z;// return 10 + 20 + 30 which is 60.
     }
   }
}



  // Only change code above this line


console.log(add(10)(20)(30));

