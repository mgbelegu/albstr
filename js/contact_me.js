$(document).ready(function () {
  $("input,textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function ($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function ($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(" ") >= 0) {
        firstName = name.split(" ").slice(0, -1).join(" ");
      }
      $.ajax({
        url: "/mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          email: email,
          message: message,
        },
        cache: false,
        success: function () {
          // Success message
          $(".succession").html("<div class='alert alert-success'>");
          $(".succession > .alert-success")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $(".succession > .alert-success").append(
            "<strong>Your message has been sent successfully. </strong>"
          );
          $(".succession > .alert-success").append("</div>");

          //clear all fields
          $("#contactForm").trigger("reset");
        },
        error: function () {
          // Fail message
          $(".succession").html("<div class='alert alert-danger'>");
          $(".succession > .alert-danger")
            .html(
              "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
          $(".succession > .alert-danger").append(
            "<strong>We are sorry " +
              firstName +
              ", it seems that our mail server is not responding. Please try again later!"
          );
          $(".succession > .alert-danger").append("</div>");
          //clear all fields
          $("#contactForm").trigger("reset");
        },
      });
    },
    filter: function () {
      return $(this).is(":visible");
    },
  });

  $('a[data-toggle="tab"]').click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
  $(".succession").html("");
});
