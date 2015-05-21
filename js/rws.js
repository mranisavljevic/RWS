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
        .scrollTop($("#main-svc")
            .offset()
            .top);
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
