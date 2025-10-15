
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

    const province = document.querySelector("#province")
    if (province.value === "default") {
        showInputError(province, "You must select a province to continue.")
        isValid = false;
    }

// This is not my work but would be what i had come up with anyways so it didnt make sense to
// remove it just to re-add it.
    const emailInput = document.getElementById("email");
    const complexEmailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!complexEmailPattern.test(emailInput.value)) {
        showInputError(emailInput, "Please enter a valid email address");

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
}}


const showInputError = (inputElement, message) => {
    const errorDisplay = document.createElement("div");
    errorDisplay.innerText = message;
    errorDisplay.className = "error-message";
    errorDisplay.setAttribute("role", "alert");

    inputElement.parentElement.appendChild(errorDisplay);
}

document.querySelector("form")?.addEventListener("submit", function (e) {
  const study = document.getElementById("study-research").value.trim();
  const training = document.getElementById("special-training").value.trim();
 
  if (!study || !training) {
    alert("Please fill out both the study/research and training/skills fields.");
    e.preventDefault();
  }
});