
var quitApp = false;
var list = [];

alert("Functions: 'new' - to add todos");
alert("Functions: 'list' - to print todos");
alert("Functions: 'quit' - to terminate app");

while(!quitApp) {
  var userAnswer = prompt("What would you like to do?");

  if (userAnswer.indexOf("new") > -1) {
    var addList = prompt("What would you like to add?");
    list.push(addList);
  }
  else if(userAnswer.indexOf("list") > -1) {
    console.log(list);
  } else if (userAnswer.indexOf("quit") > -1 ) {
    quitApp = true;
  }

}
