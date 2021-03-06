(function () {
  'use strict';

  $('.step-container').remove();

  $("a[href='#baby-step1'").addClass('active');

  var text = '<img src="./assets/images/headings/heading_bs1.png" alt="Piggy Bank" class="step-title-img"/><p>An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.</p><p>This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!</p>';
  $('#steps').append(text);

  $('.sidebar a').click(function() {
    var text;

    var step = $(this).attr('href').match(/\d+$/);
    var stepNumber = step[0];

    $('.sidebar a.active').removeClass('active');
    $(this).addClass('active');

    $('#steps').empty();

    switch(stepNumber) {
      case '1': text = '<img src="./assets/images/headings/heading_bs1.png" alt="Baby Step 1" class="step-title-img"/><p>An emergency fund is for those unexpected events in life that you can’t plan for: the loss of a job, an unexpected pregnancy, a faulty car transmission, and the list goes on and on. It’s not a matter of if these events will happen; it’s simply a matter of when they will happen.</p><p>This beginning emergency fund will keep life’s little Murphies from turning into new debt while you work off the old debt. If a real emergency happens, you can handle it with your emergency fund. No more borrowing. It’s time to break the cycle of debt!</p>';
      break;

      case '2': text = '<img src="./assets/images/headings/heading_bs2.png" alt="Baby Step 2" class="step-title-img"/><p>List your debts, excluding the house, in order. The smallest balance should be your number one priority. Don’t worry about interest rates unless two debts have similar payoffs. If that’s the case, then list the higher interest rate debt first.</p><p>The point of the debt snowball is simply this: You need some quick wins in order to stay pumped up about getting out of debt! Paying off debt is not always about math. It’s about motivation. Personal finance is 20% head knowledge and 80% behavior. When you start knocking off the easier debts, you will see results and you will stay motivated to dump your debt.</p>';
      break;

      case '3': text = '<img src="./assets/images/headings/heading_bs3.png" alt="Baby Step 3" class="step-title-img"/><p>Once you complete the first two baby steps, you will have built serious momentum. But don’t start throwing all your “extra” money into investments quite yet. It’s time to build your full emergency fund. Ask yourself, “What would it take for me to live for three to six months if I lost my income?” Your answer to that question is how much you should save.</p><p>Use this money for emergencies only: incidents that would have a major impact on you and your family. Keep these savings in a money market account. Remember, this stash of money is not an investment; it is insurance you’re paying to yourself, a buffer between you and life.</p>';
      break;

      case '4': text = '<img src="./assets/images/headings/heading_bs4.png" alt="Baby Step 4" class="step-title-img"/><p>When you reach this step, you’ll have no payments—except the house—and a fully funded emergency fund. Now it’s time to get serious about building wealth.</p><p>Dave suggests investing 15% of your household income into Roth IRAs and pre-tax retirement plans. Don’t invest more than that because the extra money will help you complete the next two steps: college savings and paying off your home early.</p>';
      break;

      case '5': text = '<img src="./assets/images/headings/heading_bs5.png" alt="Baby Step 5" class="step-title-img"/><p>By this point, you should have already started Baby Step 4—investing 15% of your income—before saving for college. Whether you are saving for you or your child to go to college, you need to start now.</p><p>In order to have enough money saved for college, you need to have a goal. Determine how much per month you should be saving at 12% interest in order to have enough for college. If you save at 12% and inflation is at 4%, then you are moving ahead of inflation at a net of 8% per year!</p>';
      break;

      case '6': text = '<img src="./assets/images/headings/heading_bs6.png" alt="Baby Step 6" class="step-title-img"/><p>Now it’s time to begin chunking all of your extra money toward the mortgage. You are getting closer to realizing the dream of a life with no house payments.</p><p>As you attack this last debt, you will gain momentum much like you did back in the second step of the debt snowball. Remember, having absolutely no payments is totally within your reach!</p>';
      break;

      case '7': text = "<img src='./assets/images/headings/heading_bs7.png' alt='Baby Step 7' class='step-title-img'/><p>It’s time to build wealth and give like never before. Leave an inheritance for future generations, and bless others now with your excess. It's really the only way to live!</p><p>Golda Meir says, “You can’t shake hands with a clenched fist.” Vow to never hold your money so tightly that you never give any away. Hoarding money is not the way to wealth. Save for yourself, save for your family’s future, and be gracious enough to bless others. You can do all three at the same time.</p>";
      break;
    }

    $(text).hide().appendTo('#steps').fadeIn(800);

  });
 }
)();
