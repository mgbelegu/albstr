$(document).ready(function () {
  $(".nav-link").click(function () {
    if ($(this).hasClass("active") === false) {
      $(this).addClass("active");
      $(".nav-link").not(this).removeClass("active");
    }
  });

  var projectsOffset = $("#projects").offset().top - 200;
  var contactOffset = $("#contact").offset().top - 200;

  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= projectsOffset) {
        $("#navProjects").addClass("active");
        $("#navAbout").removeClass("active");
        $("#navServices").removeClass("active");
        $("#navHome").removeClass("active");
        $("#navContact").removeClass("active");
      }

      if ($(window).scrollTop() >= contactOffset) {
        $("#navContact").addClass("active");
        $("#navAbout").removeClass("active");
        $("#navServices").removeClass("active");
        $("#navProjects").removeClass("active");
        $("#navHome").removeClass("active");
      }
    });
  });

  $("#navProjects").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top,
      },
      300
    );
  });

  $("#navContact").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      300
    );
  });
});
