// Ask user "are we there yet"?

var counter = true;

while(counter) {
  var userAnswer = prompt("Are we there yet?");
  if (!(userAnswer.indexOf("yeah") === -1 && userAnswer.indexOf("yes") === -1)) {
      alert("Yeah We made it!");
     counter = false;
   }
}
