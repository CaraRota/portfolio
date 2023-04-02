// CODE FOR SECTION HOME
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    var fadeLeft = $('#fadeLeft');
    var fadeRight = $('#fadeRight');
    var fadePercentage = 0.3; // Set the fade percentage to 50%
    
    // Calculate the fade in and out positions based on the fade percentage
    var fadeOutPosition = scrollTop + (windowHeight * (1 - fadePercentage));
    var fadeInPosition = scrollTop + (windowHeight * fadePercentage);
    
    // Check if the element is in the viewport
    if (fadeLeft.offset().top + fadeLeft.outerHeight() > fadeInPosition && fadeLeft.offset().top < fadeOutPosition) {
        fadeLeft.addClass('animate__fadeInLeft');
        fadeLeft.removeClass('animate__fadeOutLeft');
    } else {
        fadeLeft.removeClass('animate__fadeInLeft');
        fadeLeft.addClass('animate__fadeOutLeft');
    }
    
    // Check if the element is in the viewport
    if (fadeRight.offset().top + fadeRight.outerHeight() > fadeInPosition && fadeRight.offset().top < fadeOutPosition) {
        fadeRight.addClass('animate__fadeInRight');
        fadeRight.removeClass('animate__fadeOutRight');
    } else {
        fadeRight.removeClass('animate__fadeInRight');
        fadeRight.addClass('animate__fadeOutRight');
    }
});

// CODE FOR SECTION ABOUT ME
$(window).scroll(function () {
    var scrollTop = $(this).scrollTop();
    var windowHeight = $(this).height();
    var fadeLeft = $('#backLeft');
    var fadeRight = $('#backRight');
    var fadePercentage = 0.3; // Set the fade percentage to 50%
    
    // Calculate the fade in and out positions based on the fade percentage
    var fadeOutPosition = scrollTop + (windowHeight * (1 - fadePercentage));
    var fadeInPosition = scrollTop + (windowHeight * fadePercentage);
    
    // Check if the element is in the viewport
    if (fadeLeft.offset().top + fadeLeft.outerHeight() > fadeInPosition && fadeLeft.offset().top < fadeOutPosition) {
        fadeLeft.addClass('animate__backInLeft');
        fadeLeft.removeClass('animate__backOutLeft');
    } else {
        fadeLeft.removeClass('animate__backInLeft');
        fadeLeft.addClass('animate__backOutLeft');
    }
    
    // Check if the element is in the viewport
    if (fadeRight.offset().top + fadeRight.outerHeight() > fadeInPosition && fadeRight.offset().top < fadeOutPosition) {
        fadeRight.addClass('animate__backInRight');
        fadeRight.removeClass('animate__backOutRight');
    } else {
        fadeRight.removeClass('animate__backInRight');
        fadeRight.addClass('animate__backOutRight');
    }
});

// CODE FOR SECTION PORTFOLIO