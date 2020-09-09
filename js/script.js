$(document).ready(function(){

  // // GENERAZIONE MESSAGGIO AUTOMATICO
  function sendMassage(){
    var inputText = $("#input-massage").val();

    if (inputText != "") {
      var templateMassage = $(".template .massage-row").clone();
      templateMassage.find("massage-text").text(inputText);
      templateMassage.find("massage-time").text("time");
      templateMassage.addClass("sent");

      $(".chat").append(templateMassage);
      $("#input-message").val("");
    }
  }

  // EVENTO CLICK SUL TASTO MIC
  $(".send-massage").click(
    function(){
      sendMassage();
    }
  );

  // EVENTO PRESSIONE TASTO INVIO
  $("#input-msg").keyup(
    function(event) {
      if (event.which ==13){
        sendMassage();
      }
    }
  );

  //  OROLOGIO
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }

  var clock = document.getElementById('clock');

  function time() {
    var d = new Date();
    var m = d.getMinutes();
    m = checkTime(m);
    var h = d.getHours();
    clock.textContent = (h + ":" + m);
  }

  setInterval(time, 1000);
  console.log(clock);
});
