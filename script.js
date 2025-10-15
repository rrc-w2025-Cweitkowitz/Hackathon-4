
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

    const fullName = document.getElementById("fullName")
    // I recognize I could make a loop here
    if (fullName.value === "") {
        showInputError(fullName, "Name cannot be blank.")
        isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    const phoneNumber = document.getElementById("phoneNumber")
    if (!phoneRegex.test(phoneNumber.value)) {
        showInputError(phoneNumber, "Phone number must be a valid number.")
    }

    const postalRegex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i);
    const postalCode = document.getElementById("postalCode")

    if (!postalRegex.test(postalCode.value)) {
        showInputError(postalCode, "Postal code must be a valid Canadian Postal code.")
        isValid = false
    }



    const emailInput = document.getElementById("email");
    const complexEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!complexEmailPattern.test(emailInput.value)) {
        showInputError(emailInput, "Please enter a valid email address");
        isValid = false;
    }

    return isValid;
}


const showInputError = (inputElement, message) => {

    const errorDisplay = document.createElement("span");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.setAttribute("role", "alert");

    inputElement.parentElement.appendChild(errorDisplay);
}