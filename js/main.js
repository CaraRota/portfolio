// INIT AOS ANIMATION LIBRARY
AOS.init();

// INIT BOOTSTRAP TOOLTIPS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// SEND BUTTON STARTS HERE
const sendMsg = (e) => {
    e.preventDefault()
    const inputName = document.querySelector("#inputName")
    const name = inputName.value || alert("Please verify your Name")
}

const btnSend = document.querySelector("#btnSend")
btnSend.addEventListener("submit", sendMsg)


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