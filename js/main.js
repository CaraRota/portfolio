// Function to handle scroll animations
function handleScrollAnimation(elementId, fadeInClass, fadeOutClass, fadePercentage) {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var fadeElement = $(elementId);
    var fadeOutPosition = scrollTop + (windowHeight * (1 - fadePercentage));
    var fadeInPosition = scrollTop + (windowHeight * fadePercentage);

    if (fadeElement.offset().top + fadeElement.outerHeight() > fadeInPosition && fadeElement.offset().top < fadeOutPosition) {
        fadeElement.addClass(fadeInClass);
        fadeElement.removeClass(fadeOutClass);
    } else {
        fadeElement.removeClass(fadeInClass);
        fadeElement.addClass(fadeOutClass);
    }
}

// CODE FOR SECTION HOME
$(window).scroll(function () {
    handleScrollAnimation('#fadeLeft', 'animate__fadeInLeft', 'animate__fadeOutLeft', 0.3);
    handleScrollAnimation('#fadeRight', 'animate__fadeInRight', 'animate__fadeOutRight', 0.3);
});

// CODE FOR SECTION ABOUT ME
$(window).scroll(function () {
    handleScrollAnimation('#backLeft', 'animate__backInLeft', 'animate__backOutLeft', 0.3);
    handleScrollAnimation('#backRight', 'animate__backInRight', 'animate__backOutRight', 0.3);
});

// CODE FOR SECTION PORTFOLIO
$(window).scroll(function () {
    handleScrollAnimation('#fadeInTopLeft', 'animate__fadeInTopLeft', 'animate__fadeOutTopLeft', 0.3);
    handleScrollAnimation('#fadeInTopRight', 'animate__fadeInTopRight', 'animate__fadeOutTopRight', 0.3);
});

// CODE FOR SECTION CONTACT
$(window).scroll(function () {
    handleScrollAnimation('#bounceIn', 'animate__bounceIn', 'animate__bounceOut', 0.3);
    handleScrollAnimation('#bounceIn2', 'animate__bounceIn', 'animate__bounceOut', 0.3);
});


// INIT BOOTSTRAP TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
