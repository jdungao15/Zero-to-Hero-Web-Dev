var quitApp = false;
var toDoList = [];

alert("Functions: 'new' - to add todos");
alert("Functions: 'list' - to print todos");
alert("Functions: 'quit' - to terminate app");
alert("Functions: 'delete' - to delete item in list");

while (!quitApp) {
  //ask for user input
  var userAnswer = prompt("What would you like to do?");


  if (userAnswer.indexOf("new") > -1) {
    //Append new todos on list
    var addList = prompt("What would you like to add to the To?");
    toDoList.push(addList);
  }
  //Print all Todos
  else if (userAnswer.indexOf("list") > -1) {
    printAll();
  }
  //Quit the loop
  else if (userAnswer.indexOf("quit") > -1) {
    quitApp = true;


  } else if (userAnswer.indexOf("del") > -1) {
    delList();
  }
}



function printAll() {
  toDoList.forEach(function(todo) {
    console.log(todo);
  });
}

function delList() {
  //Delete a specifc todos
  var userDel = prompt("What would you like to delete?");

  //Loop through each item in arrays
  toDoList.forEach(function(todo) {

    //Remove item in the toDoList
    if (userDel === todo) {
      toDoList.splice(toDoList.indexOf(userDel), 1);
    }
  });

}
