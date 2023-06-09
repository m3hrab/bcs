
(function ($) {
    "use strict";
    // The DOM needs to be fully loaded (including graphics, iframes, etc)
    $(window).on("load", function () {
      mobileMenu($);
      common($);
      submitStudentForm($)
    });
  })(jQuery);

function mobileMenu($) {
    $(".mobile-menu").hide();
    $("#mobileMenu").click(function () {
      $(".mobile-menu").slideToggle();
    });
  }

function common($) {
    $("#wp-block-search__input-1").attr("autocomplete", "off");
}

function submitStudentForm($){
  $('#studentForm').submit(function(event) {
    event.preventDefault();
    var ajax_form_data = $("#studentForm").serialize();
  
    ajax_form_data = ajax_form_data + '&ajaxrequest=true&submit=Submit+Form';
  
    $.ajax({
            url: ajaxurl, // domain/wp-admin/admin-ajax.php
            type: 'post',
            data: ajax_form_data
        })
  
        .done(function(response) { // response from the PHP action
            $("#form_feedback").html("<p>The request was successful </p><br>" + response);
        })
  
        // something went wrong  
        .fail(function() {
            $("#form_feedback").html("<p>Something went wrong.</p><br>");
        })
        .always(function() {
            event.target.reset();
        });
  
    console.log(ajax_form_data)
  })
}

