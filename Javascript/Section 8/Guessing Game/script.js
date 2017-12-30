alert("Welcome to my Guessing Game");

//Create secretNuber
var secretNumber = 4;


//Ask user for Guessing

var guess = Number( prompt("Guess a number"));


//check guess

if (guess === secretNumber) {
  alert(" You got it right!");
}
else if (guess > secretNumber) {
  alert("Too high! Guess Again");
}

else {
  alert("Too low! Guess Again");
}
