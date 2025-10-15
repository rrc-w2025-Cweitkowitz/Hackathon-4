
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

    const employed = document.getElementById("employed");
    const inquiry = document.getElementById("inquiry");
    const applied = document.getElementById("applied");
    const position = document.getElementById("position");
    const startDate = document.getElementById("start-date");
    const employmentStatusYes = document.getElementById("status-yes");
    const employmentStatusChecked = document.querySelector('input[name = "employment-status"]:checked');
    const statusInquiryChecked = document.querySelector('input[name = "status-inquiry"]:checked');
    const appliedBeforeChecked = document.querySelector('input[name = "applied-before"]:checked');

    if (position.value === "") {
        showInputError(position, "You must select a position");
        isValid = false;
    }

    if (startDate.value === "") {
        showInputError(startDate, "You must provide a preferred start date");
        isValid = false;
    }

    if (employmentStatusChecked == null) {
        showInputError(employed, "One must be selected");
        isValid = false;
    }

    if (employmentStatusYes.checked && statusInquiryChecked == null) {
        showInputError(inquiry, "One must be selected");
        isValid = false;
    }

    if (appliedBeforeChecked == null) {
        showInputError(applied, "One must be selected");
        isValid = false;
    }

    return isValid;
}


const showInputError = (inputElement, message) => {
    const errorDisplay = document.createElement("div");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.setAttribute("role", "alert");

    inputElement.parentElement.appendChild(errorDisplay);
}