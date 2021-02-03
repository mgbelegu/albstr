$(document).ready(function () {
  $(".nav-link").click(function () {
    if ($(this).hasClass("active") === false) {
      $(this).addClass("active");
      $(".nav-link").not(this).removeClass("active");
    }
  });

  var homeOffset = $("#top").offset().top - 200;
  var aboutOffset = $("#about").offset().top - 200;
  var servicesOffset = $("#services").offset().top - 200;
  //var projectsOffset = $("#projects").offset().top - 200;
  var contactOffset = $("#contact").offset().top - 200;
  var statsOffset = $("#numberRow").offset().top - 200;
  var executed = false;

  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= homeOffset) {
        $("#navHome").addClass("active");
        $("#navAbout").removeClass("active");
        $("#navServices").removeClass("active");
        $("#navProjects").removeClass("active");
        $("#navContact").removeClass("active");
      }

      if ($(window).scrollTop() >= aboutOffset) {
        $("#navAbout").addClass("active");
        $("#navHome").removeClass("active");
        $("#navServices").removeClass("active");
        $("#navProjects").removeClass("active");
        $("#navContact").removeClass("active");
      }

      if ($(window).scrollTop() >= servicesOffset) {
        $("#navServices").addClass("active");
        $("#navAbout").removeClass("active");
        $("#navHome").removeClass("active");
        $("#navProjects").removeClass("active");
        $("#navContact").removeClass("active");
        $(".counter-count").each(function () {
          if (executed === false) {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 5000,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  },
                }
              );
          }
        });
        executed = true;
      }

      if ($(window).scrollTop() >= statsOffset) {
        $(".counter-count").each(function () {
          if (executed === false) {
            $(this)
              .prop("Counter", 0)
              .animate(
                {
                  Counter: $(this).text(),
                },
                {
                  duration: 5000,
                  easing: "swing",
                  step: function (now) {
                    $(this).text(Math.ceil(now));
                  },
                }
              );
          }
        });
        executed = true;
      }

      /*if ($(window).scrollTop() >= projectsOffset) {
        $("#navProjects").addClass("active");
        $("#navAbout").removeClass("active");
        $("#navServices").removeClass("active");
        $("#navHome").removeClass("active");
        $("#navContact").removeClass("active");
      }*/

      if ($(window).scrollTop() >= contactOffset) {
        $("#navContact").addClass("active");
        $("#navAbout").removeClass("active");
        $("#navServices").removeClass("active");
        $("#navProjects").removeClass("active");
        $("#navHome").removeClass("active");
      }
    });
  });

  $("#navHome").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#home").offset().top,
      },
      300
    );
  });

  $("#navAbout").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about").offset().top,
      },
      300
    );
  });

  $("#navServices").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#services").offset().top,
      },
      300
    );
  });

  /*$("#navProjects").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#projects").offset().top,
      },
      300
    );
  });*/

  $("#navContact").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      300
    );
  });

  $("#contactButton").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#contact").offset().top,
      },
      300
    );
  });
});

/*var homeOffset = $("#home").offset().top;
var aboutOffset = $("#about").offset().top;
var servicesOffset = $("#services").offset().top;
var projectsOffset = $("#projects").offset().top;
var contactOffset = $("#contact").offset().top;

var $w = $(window).scroll(function () {
  if ($w.scrollTop() > homeOffset) {
    if ($("#navHome").hasClass("active") === false) {
      $(this).addClass("active");
      $("#navAbout").removeClass("active");
      $("#navServices").removeClass("active");
      $("#navProjects").removeClass("active");
      $("#navContact").removeClass("active");
    }
  } else if ($w.scrollTop() > aboutOffset) {
    if ($("#navAbout").hasClass("active") === false) {
      $(this).addClass("active");
      $("#navHome").removeClass("active");
      $("#navServices").removeClass("active");
      $("#navProjects").removeClass("active");
      $("#navContact").removeClass("active");
    }
  } else if ($w.scrollTop() > servicesOffset) {
    if ($("#navServices").hasClass("active") === false) {
      $(this).addClass("active");
      $("#navAbout").removeClass("active");
      $("#navHome").removeClass("active");
      $("#navProjects").removeClass("active");
      $("#navContact").removeClass("active");
    }
  } else if ($w.scrollTop() > projectsOffset) {
    if ($("#navProjects").hasClass("active") === false) {
      $(this).addClass("active");
      $("#navAbout").removeClass("active");
      $("#navServices").removeClass("active");
      $("#navHome").removeClass("active");
      $("#navContact").removeClass("active");
    }
  } else if ($w.scrollTop() > contactOffset) {
    if ($("#navContact").hasClass("active") === false) {
      $(this).addClass("active");
      $("#navAbout").removeClass("active");
      $("#navServices").removeClass("active");
      $("#navProjects").removeClass("active");
      $("#navHome").removeClass("active");
    }
  }
});
*/
