// INIT AOS ANIMATION LIBRARY
AOS.init();

// INIT BOOTSTRAP TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// SEND BUTTON STARTS HERE
const btnSend = document.querySelector("#form")
btnSend.addEventListener("submit", sendMsg = (e) => {
    e.preventDefault()

    let name = inputName.value.trim()
    if (!name) {
        Toastify({
            text: "Please verify your Name",
            gravity: "top",
            position: "right",
        }).showToast()

        return
    }

    let email = inputEmail.value.trim()
    if (!email) {
        Toastify({
            text: "Please verify your Email",
            gravity: "top",
            position: "right",
        }).showToast()

        return
    }

    let message = inputMessage.value.trim()
    if (!message) {
        Toastify({
            text: "Please verify your Message",
            gravity: "top",
            position: "right",
        }).showToast()

        return
    }

    const myEmail = "logicalbrainstudio@gmail.com"

    window.location.href = `mailto:${myEmail}?subject=Hello Seb! My name is ${name}!&body=${message}%0D%0A%0D%0AYou can reply to this message by sending me an email here: %0D%0A${email}`
    Toastify({
        text: "A window is popping up now!",
        gravity: "top",
        position: "right",
    }).showToast()

    form.reset()
})


// RESET BUTTON STARTS HERE
const btnReset = document.querySelector("#btnReset")
btnReset.addEventListener("click", resetForm = () => {
    if (inputName.value.length > 0 || inputEmail.value.length > 0 || inputMessage.value.length > 0) {
        const form = document.querySelector("#form")
        form.reset()
        Toastify({
            text: "Form has been cleaned up!",
            gravity: "top",
            position: "right",
        }).showToast();
    } else {
        Toastify({
            text: "You should try writing something first!",
            gravity: "top",
            position: "right",
        }).showToast();
    }
})

// DARK MODE STARTS HERE
const btnDark = document.querySelector("#btnDark")
btnDark.addEventListener("click", changeColor = () => {
    const darkMode = document.body
    darkMode.classList.toggle("dark-mode")
})