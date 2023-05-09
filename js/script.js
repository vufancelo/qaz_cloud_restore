$(function() {
  /*Smooth scroll*/
  $("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset

    }, 500);
  });

  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("collapse");

    $(blockId).slideToggle();

  });


});
