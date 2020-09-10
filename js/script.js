$(document).ready(function(){

  // FUNZIONE OROLOGIO
  function getTime(){
    var d = new Date();
    var m = d.getMinutes();
    var h = d.getHours();

    if (m < 10) {
      m = "0" + m;
    }
  return h + ":" + m;
  }

  // EVENTO CLICK SUL TASTO MIC
  $(".send-message").click(
    function(){
      sendMessage();
    }
  );

  // EVENTO PRESSIONE TASTO INVIO
  $("#input-msg").keyup(
    function(event) {
      if (event.which ==13){
        sendMessage();
      }
    }
  );



  // GENERAZIONE MESSAGGIO AUTOMATICO CON ORARIO DI INVIO
  function sendMessage(){
    var inputText = $("#input-msg").val();

    if (inputText != "") {
      var templateMessage = $(".template .message-row").clone();


      templateMessage.find(".message-text").text(inputText);
      templateMessage.find(".message-time").text(getTime);
      templateMessage.addClass("sent");

      $(".chat").append(templateMessage);
      setTimeout(cpuMessage, 1000);
      $("#input-msg").val("");
    }
  }

  // RISPOSTA AUTOMATICA CPU
  function cpuMessage(){
    var cpuMessage = $(".template .message-row").clone();

    cpuMessage.find(".message-text").text("ok");
    cpuMessage.find(".message-time").text(getTime);

    $(".chat").append(cpuMessage);
  }

  // FUNZIONE RICERCA CON RILASCIO DEL TASTO DELLA TASTIERA
  $("search").keyup(
    function(){
      var searchInput = $(this).val().toLowerCase();
      var contactsName = $(".contact .contact-name");
      // per ogni elemento selezionato si fara' il controllo delle lettere digitate.
      // Nascondera' i contact non corrispondenti
      contactsName.each(
        function(){
          var name = $(this).text().toLowerCase();
          // compare o scompare il blocco contattto
          if (name.includes(searchInput) == true) {
            $(this).parents(".contact").show();
          }else {
            $(this).parents(".contact").hide();
          }
        }
      );


    }
  );


});
