$(document).ready(function() {
  $(".navbar-nav li").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

$(document).ready(function() {
  $("#theatre_tag").click(function() {
    document.getElementById("#photos_videos").style.display = "flex";
  });
});
