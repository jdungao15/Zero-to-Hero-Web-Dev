



// function isEven(num) {
//   if (num % 2 === 0) {
//     console.log("Number is Even");
//     return true;
//   } else {
//     console.log("Number is Odd");
//     return false;
//
//   }
// }
//
// var userAnswer = Number(prompt("Enter any number"));
//
// isEven(userAnswer);


function factorial(num) {
  if (num === 0) {
    console.log("Factorial of " + num + "is 1");
    return 1;
}  else {
    return num * factorial (num-1);
    }
  }

  var userAnswer = Number(prompt("Enter any number"));

  console.log(factorial(userAnswer));

//Hello-world
function kebabToSnake(word) {
  if (word.indexOf("-") === "-" ) {
    return word + word.splice(word.indexOf("-"))
  }
}
