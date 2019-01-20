$(document).ready(function() {
  $(".navbar-nav li").click(function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});

function UrlExists(fullUrl) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", fullUrl, true);
  xhr.onload = function(e) {
    if (xhr.readyState === 4) {
      if (xhr.status != 404) {
        $("#theatre").append("<img src='" + fullUrl + "'>");
      } else {
        $("#theatre").append("<p>Nothing found</p>");
      }
    }
  };

  xhr.send(null);
}
