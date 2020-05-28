// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burgername: $("#name").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
$(".eat").on("click", function(event){
var id = $(event.target).data("burgerid")
var eatdata = {eaten:true}
$.ajax("/api/burgers/"+id, {
  type: "PUT",
  data: eatdata
}).then(
  function() {
    console.log("was it good?");
    // Reload the page to get the updated list
    location.reload();
  }
);
})
  
});
