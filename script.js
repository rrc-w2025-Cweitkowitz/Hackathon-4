
const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const errorMessages = document.querySelectorAll(".error-message");
    for (const el of errorMessages) {
        el.remove();
    }

    //  Evaluate the return of the validateForm function
    if (validateForm()) {
        form.submit();
        console.log("Validation successful");
    } else {
        console.log("Validation failed");
    }
})

const validateForm = () => {
    let isValid = true;

    // const emailInput = document.getElementById("email");
    // const complexEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // if (!complexEmailPattern.test(emailInput.value)) {
    //     showInputError(emailInput, "Please enter a valid email address");
    //     isValid = false;
    // }

    return isValid;
}


const showInputError = (inputElement, message) => {
    const errorDisplay = document.createElement("div");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.setAttribute("role", "alert");

    inputElement.parentElement.appendChild(errorDisplay);
}