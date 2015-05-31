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

  $("form").on("submit", function(e) {
    e.preventDefault();
    var name = document.getElementById("name-field").value;
    var email = document.getElementById("email-field").value;
    var msg = document.getElementById("message-field").value;
    $.ajax({
        type: "POST",
        url: "form-to-email.php",
        data: {name: name, email: email, message: msg}
      }).done(function() {
        $("<h4>Submitted</h4>").insertBefore("#submit-button");
        $("#submit-button").hide();
      });
    /*
    var confirmClick = function() {
      $("<h4>Submitted</h4>")
        .insertBefore("#submit-button");
      $("#submit-button").hide();
    };
    confirmClick();
    */
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

});
