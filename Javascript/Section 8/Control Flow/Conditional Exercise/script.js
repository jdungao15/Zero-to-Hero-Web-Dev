var userAge = Number(prompt("How old are you?"));

if (userAge < 0) {
  alert("Age cannot be negative");
} else if (userAge == 21) {
  alert("Happy 21st birthday!");
} else if (userAge % 2 == 1) {
  alert("Your age is odd!");
} else if (age % Math.sqrt(userAge) === 0) {
  alert("Your age is a perfect Square");
} else {
  alert("Welcome!");
}
