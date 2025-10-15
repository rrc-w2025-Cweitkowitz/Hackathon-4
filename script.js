
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

document.getElementById("username").addEventListener("change", (event) => {
    console.log("Username has changed to: ", event.target.value);
});


const validateForm = () => {

    let isValid = true;
    const username = document.getElementById("username");

    if (username.value === "") {
        showInputError(username, "Username is required");
        isValid = false;
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

document.querySelector("form")?.addEventListener("submit", function (e) {
  const study = document.getElementById("study-research").value.trim();
  const training = document.getElementById("special-training").value.trim();
 
  if (!study || !training) {
    alert("Please fill out both the study/research and training/skills fields.");
    e.preventDefault();
  }
});