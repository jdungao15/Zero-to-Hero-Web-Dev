var leftScore = document.querySelector("#l-score");
var rightScore = document.querySelector("#r-score");
var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var playGames = document.querySelector("input");
var numberOfPlay = document.querySelector("#n-play");
var playTo = 1;

//Player One
playerOne.addEventListener("click", function() {
  var totalScore = Number(leftScore.textContent);
  if (totalScore < playTo -1) {
    totalScore+= 1;
    leftScore.textContent = totalScore;

    if (totalScore === playTo -1) {
      leftScore.style.color = "green";
    }


  }
});

resetButton.addEventListener("click", reset);

document.querySelector("input").addEventListener("click", function() {
  numberOfPlay.textContent = playTo;
  return playTo++;
});

//Player two
playerTwo.addEventListener("click", function() {
  var totalScore = Number(rightScore.textContent);
  if (totalScore < playTo -1) {

    totalScore++;
    rightScore.textContent = totalScore;

    if (totalScore === playTo -1) {
      rightScore.style.color = "green";
    }

  }
});

//Reset Button
resetButton.addEventListener("click", reset);




//Functions

function reset() {
  leftScore.textContent = "0";
  rightScore.textContent = "0";
  rightScore.style.color = "black";
  leftScore.style.color = "black";
  numberOfPlay.textContent = "0";
}
