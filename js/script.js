$(document).ready(function(){

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

  // FUNZIONE RICERCA CON RILASCIO DEL TASTO DELLA TASTIERA
  $(".search").keyup(
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


  // EVENTO CLICK MENU A TENDINA con ON che carica la funzio al caricamento della pagina perche sono elementi dinamici
  $(document).on("click", ".message-options",
    function(){
      $(this).siblings(".message-actions").toggle();
    }
  );
  $(document).on("click", ".message-actions",
    function(){
      $(this).parents(".message-row").remove();
    }
  );

  // associo la classe dei contatti agli attributi delle chat
  $(".contact").click(
    function(){
      $(".contact").removeClass("d-block");
      $(this).addClass("d-block");

      var dataContatto = $(this).attr("data-contatto");

      $(".chat").removeClass("d-block");
      $(".chat[data-chat = " +dataContatto+ "]").addClass("d-block");
      // link immagine
      var img = $(this).find("img").attr("src");
      // link nome
      var name = $(this).find(".contact-name").text();
      // link tempo
      var time = $(this).find(".contact-time").text();
      // modifica dei valori
      $(".win-chat .avatar").attr("src", img);
      $(".win-chat .contact-name").text(name);
      $(".win-chat .contact-lastmsg-access time").text(time);
    }
  );



});

// GENERAZIONE MESSAGGIO CON ORARIO DI INVIO
function sendMessage(){
  var inputText = $("#input-msg").val();

  if (inputText != "") {
    var templateMessage = $(".template .message-row").clone();
    var time = getTime();

    templateMessage.find(".message-text").text(inputText);
    templateMessage.find(".message-time").text(time);
    templateMessage.addClass("sent");

    $(".chat.d-block").append(templateMessage);
    setTimeout(cpuMessage, 1000);
    $("#input-msg").val("");
    var heightChatBlock = $(".chat.d-block").prop("scrollHeight");
    $(".chats-wrapper").scrollHeight(heightChatBlock);
  }
}

// RISPOSTA AUTOMATICA CPU
function cpuMessage(){
  var cpuMessage = $(".template .message-row").clone();

  cpuMessage.find(".message-text").text("ok");
  var time = getTime();
  cpuMessage.find(".message-time").text(time);

  $(".chat.d-block").append(cpuMessage);
  var heightChatBlock = $(".chat.d-block").prop("scrollHeight");
  $(".chats-wrapper").scrollHeight(heightChatBlock);
}

  // FUNZIONE OROLOGIO
  function getTime(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();

    if (m < 10) {
      m = "0" + m;
    }
  return h + ":" + m;
  }
