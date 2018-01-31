

// Add new toDo list
$("#todoField").on('keypress', function(evt) {
  var newToDo = $("#todoField").val();
  var addToDo = "<li><span class='deleted'><i class='far fa-trash-alt'></i> </span>" + newToDo + "</li>";

  if (evt.which === 13) {
    $(".todoList").append(addToDo);
    $("#todoField").val('');
    evt.preventDefault();
  }
});


//when 'li' is click strikethrough
  $(".todoList").on('click', 'li', function() {
    $(this).toggleClass("completed");
  });

//when X or trash logo is click, remove the list from the DOM.
  $(".todoList").on('click', '.deleted', function(evt) {
    $(this).parent().fadeOut(500, function() {
      $(this).remove();
    });
    evt.stopPropagation();
  });

//when plus logo is click hide/show input field
$("#plus-logo").click(function() {
  $("#todoField").toggle("200", function() {

  });
});
