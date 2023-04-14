// Function to handle scroll animations
function handleScrollAnimation(elementId, fadeInClass, fadeOutClass, fadePercentage) {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();
    const fadeElement = $(elementId)[0];
    const fadeOutPosition = scrollTop + (windowHeight * (1 - fadePercentage));
    const fadeInPosition = scrollTop + (windowHeight * fadePercentage);

    if (fadeElement.offsetTop + fadeElement.offsetHeight > fadeInPosition && fadeElement.offsetTop < fadeOutPosition) {
        fadeElement.classList.add(fadeInClass);
        fadeElement.classList.remove(fadeOutClass);
    } else {
        fadeElement.classList.remove(fadeInClass);
        fadeElement.classList.add(fadeOutClass);
    }
}

// Debounce function to limit the rate of function calls
function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(func, wait);
    };
}

// CODE FOR SECTION HOME
const handleScrollHome = debounce(function () {
    handleScrollAnimation('#fadeLeft', 'animate__fadeInLeft', 'animate__fadeOutLeft', 0.3);
    handleScrollAnimation('#fadeRight', 'animate__fadeInRight', 'animate__fadeOutRight', 0.3);
}, 100);

// CODE FOR SECTION ABOUT ME
const handleScrollAboutMe = debounce(function () {
    handleScrollAnimation('#backLeft', 'animate__backInLeft', 'animate__backOutLeft', 0.3);
    handleScrollAnimation('#backRight', 'animate__backInRight', 'animate__backOutRight', 0.3);
}, 100);

// CODE FOR SECTION PORTFOLIO
const handleScrollPortfolio = debounce(function () {
    handleScrollAnimation('#fadeInTopLeft', 'animate__fadeInTopLeft', 'animate__fadeOutTopLeft', 0.3);
    handleScrollAnimation('#fadeInTopRight', 'animate__fadeInTopRight', 'animate__fadeOutTopRight', 0.3);
}, 100);

// CODE FOR SECTION CONTACT
const handleScrollContact = debounce(function () {
    handleScrollAnimation('#bounceIn', 'animate__bounceIn', 'animate__bounceOut', 0.3);
    handleScrollAnimation('#bounceIn2', 'animate__bounceIn', 'animate__bounceOut', 0.3);
}, 100);

// Bind debounced scroll events to window
$(window).scroll(handleScrollHome);
$(window).scroll(handleScrollAboutMe);
$(window).scroll(handleScrollPortfolio);
$(window).scroll(handleScrollContact);

// INIT BOOTSTRAP TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
