$(document).ready(function(){

    /*Variables*/
    var helpFirst = $('.collllor__help-first');
    var helpSecond = $(".collllor__help-second");
    var helpThird = $(".collllor__help-third");
    var helpFourth = $(".collllor__help-fourth");
    var helpFifth = $(".collllor__help-fifth");
    var helpSixth = $(".collllor__help-sixth");
    var helpSeventh = $(".collllor__help-seventh");
    var helpLast = $(".collllor__help-last");
    var helpIcon = $(".collllor__help-icon");

    /*Check cookie with jquery_cookie plugin and delay on emergence of the hint*/
    setTimeout (function(){
        // Check cookie for visits
        if (!$.cookie('hideModal')) {
            // if no cookie emergence the hint with delay 1,5s
            helpFirst.css('display', 'block');
            if (helpFirst.css('display') == 'block') {
                helpIcon.css('display', 'none');
            }
        }
        $.cookie('hideModal', true, {
            // Storage time in days
            expires: 7,
            path: '/'
        });
    }, 1500);

    /*Close the hint*/
    $('.not-now, .button-last').click(function() {
        $('.collllor__help').fadeOut(100);
        helpIcon.css('display', 'block');
    });

    /*Open the hint with click help icon*/
    helpIcon.click(function() {
        helpFirst.css('display', 'block');
        if(helpFirst.css('display') == 'block') {
            helpSecond.css('display', 'none');
            helpThird.css('display', 'none');
            helpFourth.css('display', 'none');
            helpFifth.css('display', 'none');
            helpSixth.css('display', 'none');
            helpSeventh.css('display', 'none');
            helpLast.css('display', 'none');
            helpIcon.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-first").click(function() {
        helpSecond.css('display', 'block');
        if(helpSecond.css('display') == 'block') {
            helpFirst.css('display', 'none');
            helpThird.css('display', 'none');
            helpFourth.css('display', 'none');
            helpFifth.css('display', 'none');
            helpSixth.css('display', 'none');
            helpSeventh.css('display', 'none');
            helpLast.css('display', 'none');
            helpIcon.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-second").click(function() {
        helpThird.css('display', 'block');
        if(helpThird.css('display') == 'block') {
            helpFirst.css('display', 'none');
            helpSecond.css('display', 'none');
            helpFourth.css('display', 'none');
            helpFifth.css('display', 'none');
            helpSixth.css('display', 'none');
            helpSeventh.css('display', 'none');
            helpLast.css('display', 'none');
            helpIcon.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-third").click(function() {
        helpFourth.css('display', 'block');
        if(helpFourth.css('display') == 'block') {
            helpFirst.css('display', 'none');
            helpSecond.css('display', 'none');
            helpThird.css('display', 'none');
            helpFifth.css('display', 'none');
            helpSixth.css('display', 'none');
            helpSeventh.css('display', 'none');
            helpLast.css('display', 'none');
            helpIcon.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-fourth").click(function() {
        helpFifth.css('display', 'block');
        if(helpFifth.css('display') == 'block') {
            helpFirst.css('display', 'none');
            helpSecond.css('display', 'none');
            helpThird.css('display', 'none');
            helpFourth.css('display', 'none');
            helpSixth.css('display', 'none');
            helpSeventh.css('display', 'none');
            helpLast.css('display', 'none');
            helpIcon.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-fifth").click(function() {
        helpSixth.css('display', 'block');
        if(helpSixth.css('display') == 'block') {
            helpFirst.css('display', 'none');
            helpSecond.css('display', 'none');
            helpThird.css('display', 'none');
            helpFourth.css('display', 'none');
            helpFifth.css('display', 'none');
            helpSeventh.css('display', 'none');
            helpLast.css('display', 'none');
            helpIcon.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-sixth").click(function() {
        helpSeventh.css('display', 'block');
        if(helpSeventh.css('display') == 'block') {
            helpFirst.css('display', 'none');
            helpSecond.css('display', 'none');
            helpThird.css('display', 'none');
            helpFourth.css('display', 'none');
            helpFifth.css('display', 'none');
            helpSixth.css('display', 'none');
            helpLast.css('display', 'none');
            helpIcon.css('display', 'none');
        }
    });

    /*Transition to the following hint*/
    $(".button-seventh").click(function() {
        helpLast.css('display', 'block');
        if(helpLast.css('display') == 'block') {
            helpFirst.css('display', 'none');
            helpSecond.css('display', 'none');
            helpThird.css('display', 'none');
            helpFourth.css('display', 'none');
            helpFifth.css('display', 'none');
            helpSixth.css('display', 'none');
            helpSeventh.css('display', 'none');
            helpIcon.css('display', 'none');
        }
    });
});



