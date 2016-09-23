(function () {
  'use strict';

  var text = '<img src="./assets/images/headings/heading_bs1.png" alt="Piggy Bank" class="step-title-img"/><p>An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.</p><p>This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!</p>';

  //remove elements not needed when Javascript is working
  $('.step-container').remove();

  // add active class to first step
  $("a[href='#baby-step1'").addClass('active');
  $('.step-container div').not('#steps').addClass('hidden');

  // add step1 to steps div on load
  $('#steps').append(text);

  // on click, remove active and add to clicked step
  $('.sidebar a').click(function() {
    var step = $(this).attr('href').match(/\d+$/);
    var stepNumber = step[0];
    var text;

    // $('.step-container div').addClass('hidden');
    $('.sidebar a.active').removeClass('active');
    $(this).addClass('active');

    // clear steps div
    $('#steps').empty();

    switch(stepNumber) {
      case '1': text = '<img src="./assets/images/headings/heading_bs1.png" alt="Piggy Bank" class="step-title-img"/><p>An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.</p><p>This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!</p>';
      break;

      case '2': text = '<img src="./assets/images/headings/heading_bs2.png" alt="Piggy Bank" class="step-title-img"/><p>Step 2</p>';
      break;

      case '3': text = '<img src="./assets/images/headings/heading_bs3.png" alt="Piggy Bank" class="step-title-img"/><p>Step 3</p>';
      break;

      case '4': text = '<img src="./assets/images/headings/heading_bs4.png" alt="Piggy Bank" class="step-title-img"/><p>Step 4</p>';
      break;

      case '5': text = '<img src="./assets/images/headings/heading_bs5.png" alt="Piggy Bank" class="step-title-img"/><p>Step 5</p>';
      break;

      case '6': text = '<img src="./assets/images/headings/heading_bs6.png" alt="Piggy Bank" class="step-title-img"/><p>Step 6</p>';
      break;

      case '7': text = '<img src="./assets/images/headings/heading_bs7.png" alt="Piggy Bank" class="step-title-img"/><p>Step 7</p>';
      break;
    }

    $('#steps').append(text);
  });
 }
)();
