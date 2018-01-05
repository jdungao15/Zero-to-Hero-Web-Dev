var changeColor = document.querySelector("button");
var body = document.querySelector("body");
var isGreen = true;


// changeColor.addEventListener("click", function() {
//   if(isGreen) {
//     body.style.backgroundColor = "green";
//   }
//   else {
//     body.style.backgroundColor = "white";
//   }
//
//   isGreen = !isGreen;
//
// });

//Alternative

changeColor.addEventListener("click", function() {
  body.classList.toggle("green");

});
