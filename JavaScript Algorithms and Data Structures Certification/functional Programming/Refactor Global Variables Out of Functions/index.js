// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr,bookName) {
  let copyList = [...arr];
  copyList.push(bookName);
  return copyList;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newList = [...arr];
  const book_index = newList.indexOf(bookName);
  console.log(newList.indexOf(bookName));
  if (book_index >= 0) {

    newList.splice(book_index, 1);
    return newList;

    // Change code above this line
    }
    
}
var newBookList = add(bookList, 'A Brief History of Time');
//console.log(newBookList);
var removeBook = remove(bookList, 'On The Electrodynamics of Moving Bodies')
//remove();
console.log(removeBook);
