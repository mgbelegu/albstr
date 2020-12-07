$(document).ready(function () {
  $(".nav-link").click(function () {
    if ($(this).hasClass("active") === false) {
      $(this).addClass("active");
      $(".nav-link").not(this).removeClass("active");
    }
  });
});
