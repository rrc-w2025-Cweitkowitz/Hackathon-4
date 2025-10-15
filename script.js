
const form = document.getElementById("userForm");

form.addEventListener("submit", (event) => {

    event.preventDefault(); 

    const errorMessages = document.querySelectorAll(".error-message");
    for (const el of errorMessages) {
        el.remove(); 
    }

    //  Evaluate the return of the validateForm function
    if (validateForm()) {
        // Save education data before submitting
        saveEducationData();
        form.submit();
        console.log("Validation successful");
    } else {
        console.log("Validation failed");
    } 
});

document.getElementById("username").addEventListener("change", (event) => {
    console.log("Username has changed to: ", event.target.value);
});

// ADD Education field listener. 
document.getElementById("hsName").addEventListener("change", (event) => {
    console.log("High School name has changed to: ", event.target.value);
});

document.getElementById("collegeName").addEventListener("change", (event) => {
    console.log("College name has changed to: ", event.target.value);
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

    const hsName = document.getElementById("hsName");
    if (hsName.value === "") {
        showInputError(hsName, "High School name is required");
        isValid = false;
    }
    
    const hsYears = document.getElementById("hsYears");
    if (hsYears.value !== "" && !validateYearFormat(hsYears.value)) {
        showInputError(hsYears, "Please enter valid year format (e.g., 2015-2019 or 2020)");
        isValid = false;
    }
    
    const collegeYears = document.getElementById("collegeYears");
    if (collegeYears.value !== "" && !validateYearFormat(collegeYears.value)) {
        showInputError(collegeYears, "Please enter valid year format (e.g., 2019-2023 or 2023)");
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
