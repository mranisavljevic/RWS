$(document).ready(function() {

  $(".more-less").on("click", function() {
    $(this)
      .parent()
      .children(".more-less")
      .toggleClass("hide")
      .parent()
      .siblings("#secondary-svc")
      .toggleClass("hide");


  });

  $("#collapse").on("click", function() {
      $(document)
        .scrollTop($("#show-more")
          .offset()
          .top);
  });

  $("#email-form").on("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("name-field").value;
    var email = document.getElementById("email-field").value;
    var msg = document.getElementById("message-field").value;
    $.ajax({
        type: "POST",
        url: "form-to-email.php",
        data: {name: name, email: email, message: msg}
      }).done(function() {
        $("<h4>Thank you for your submission</h4>").insertBefore("#submit-button");
        //$("#submit-button").hide();
      $("#name-field").val("");
      $("#email-field").val("");
      $("#message-field").val("");
      });
  });

  var testAnim = function(icon) {
    $(icon).addClass('tada')
      .on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('tada');
    });
  };

  $(".animated").on("mouseenter", function() {
    var iconImg = "#" + $(this).attr("id");
    testAnim(iconImg);
  });

  $(".open-form")
    .on("click", function(e) {
      e.preventDefault();
      $("#popup-wrapper").css("display", "block");
      $("html, body").css("overflow", "hidden");
    });

    $("#popup-form").on("submit", function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "form-to-email.php",
        data: {name: name, email: email, message: msg}
      }).done(function() {
        $("#popup-wrapper").css("display", "none");
        $("html, body").css({
          "overflow": "auto",
          "height": "auto"
        });
      $("#popup-name-field").val("");
      $("#popup-email-field").val("");
      $("#popup-message-field").val("");
      });

  });

  $("#popup-cancel-button").on("click", function(e) {
    e.preventDefault();
      $("#popup-wrapper").css("display", "none");
      $("html, body").css({
        "overflow": "auto",
        "height": "auto"
      });
      $("#popup-name-field").val("");
      $("#popup-email-field").val("");
      $("#popup-message-field").val("");
    });

  $(document).keyup(function(e) {
     if (e.keyCode == 27) {
      if ($("#popup-wrapper").css("display") == "block")
        $("#popup-wrapper").css("display", "none");
        $("html, body").css({
          "overflow": "auto",
          "height": "auto"
          });
        $("#popup-name-field").val("");
        $("#popup-email-field").val("");
        $("#popup-message-field").val("");
    }

});

});
