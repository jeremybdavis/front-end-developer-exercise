(function () {
  'use strict';

  // add active class to first step
  $("a[href='#baby-step1'").addClass('active');

  $('.step-container div').not('#baby-step1').addClass('hidden');

  // on click, remove active and add to clicked step
  $('.sidebar a').click(function() {
    var stepNumber = $(this).attr('href').substring(1);

    $('.step-container div').addClass('hidden');
    $('.sidebar a.active').removeClass('active');
    $(this).addClass('active');
    $('#' + stepNumber).removeClass('hidden');
  });
 }
)();
