"use strict";

(function () {
    const modelEl = document.querySelector(".modal");
    const openEl = document.querySelectorAll(".open");
    const closeEl = document.querySelector(".close");

    document.addEventListener("DOMContentLoaded", () => { 
        openEl.forEach(button => {
            button.addEventListener("click", (event) => {
                event.preventDefault(); // Prevent default link behavior
                clearValidation();
                modelEl.showModal(); // Open the dialog
            });
        });

        closeEl.addEventListener("click", () => {
            modelEl.close(); // Close the dialog
        });
    });

    const form = document.querySelector("#subscribe");
    const emailEl = document.querySelector("#email");
    const confirmEmailEl = document.querySelector("#confirmEmail");

    // Validate email format as user types
    emailEl.addEventListener("input", function () {
        clearFieldValidation(emailEl, ".error-message#email-error");
        if (!isValidEmail(emailEl.value.trim())) {
            showError(emailEl, "This field be a valid email address including a @", ".error-message#email-error");
        }
    });

    // Validate form on submit
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission initially
        let isValid = true;

        // Clear previous validation
        clearValidation();

        // Validate Email (Required and format)
        if (!emailEl.value.trim()) {
            showError(emailEl, "This field is required", ".error-message#email-error");
            isValid = false;
        } else if (!isValidEmail(emailEl.value)) {
            showError(emailEl, "Please enter a valid email address", ".error-message#email-error");
            isValid = false;
        }

        // Validate Confirm Email (Required and Matches Email)
        if (!confirmEmailEl.value.trim()) {
            showError(confirmEmailEl, "Please confirm your email", ".error-message#confirmemail-error");
            isValid = false;
        } else if (emailEl.value !== confirmEmailEl.value) {
            showError(confirmEmailEl, "This field must match the provided email address", ".error-message#confirmemail-error");
            isValid = false;
        }

        // If all fields are valid, submit the form
        if (isValid) {
            alert("Submitted!");
            form.submit();
        }
    });

    // Show error message using innerHTML and querySelector
    function showError(element, message, errorSelector) {
        element.classList.add("invalid");
        document.querySelector(errorSelector).innerHTML = message;
    }

    // Clear a specific field's validation
    function clearFieldValidation(element, errorSelector) {
        element.classList.remove("invalid");
        document.querySelector(errorSelector).innerHTML = "";
    }

    // Clear all validation messages
    function clearValidation() {
        document.querySelectorAll(".invalid").forEach(function (element) {
            element.classList.remove("invalid");
        });
        document.querySelectorAll(".error-message").forEach(function (element) {
            element.innerHTML = "";
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
})();
