$(document).ready(function(){

  $(".send-massage").click(
    function(){
      sendMassage();
    }
  );
  $("#input-message").keyup(
    function(event) {
      if (event.which ==13){
        sendMassage();
      }
    }
  );


});
function sendMassage(){
  var inputText = $(""#input-massage").val();

  var date = new Date ();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var time = hours +":"+ minutes;

  if (inputText != "") {
    var templateMassage = $(".template .massage-row").clone();
    templateMassage.find("massage-text").text(inputText);
    templateMassage.find("massage-time").text("time");
    templateMassage.addClass("sent");

    $(".chat").append(templateMassage);
    $("#input-message").val("");
  }
}
