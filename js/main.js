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
    handleScrollAnimation('#fadeLeft', 'animate__fadeInLeft', 'animate__fadeOutLeft', 0.5);
    handleScrollAnimation('#fadeRight', 'animate__fadeInRight', 'animate__fadeOutRight', 1);
});

// CODE FOR SECTION ABOUT ME
$(window).scroll(function () {
    handleScrollAnimation('#backLeft', 'animate__backInLeft', 'animate__backOutLeft', 0.5);
    handleScrollAnimation('#backRight', 'animate__backInRight', 'animate__backOutRight', 1);
});

// CODE FOR SECTION PORTFOLIO
$(window).scroll(function () {
    handleScrollAnimation('#fadeInTopLeft', 'animate__fadeInTopLeft', 'animate__fadeOutTopLeft', 0.5);
    handleScrollAnimation('#fadeInTopRight', 'animate__fadeInTopRight', 'animate__fadeOutTopRight', 1);
});

// CODE FOR SECTION CONTACT
$(window).scroll(function () {
    handleScrollAnimation('#bounceIn', 'animate__bounceIn', 'animate__bounceOut', 0.5);
    handleScrollAnimation('#bounceIn2', 'animate__bounceIn', 'animate__bounceOut', 1);
});


// INIT BOOTSTRAP TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
