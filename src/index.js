// index.js

// The webhook URL
const webhookUrl = "https://webhook.site/41b3fa6e-82f9-4bcc-af04-46260100132c";

// Dynamically create a form and add it to the DOM
function createAndAppendForm() {
    // Create a form element
    const form = document.createElement("form");
    form.method = "POST";
    form.action = webhookUrl;

    // Add input field
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "userInput";
    inputField.placeholder = "Enter your input";
    inputField.required = true;

    // Add a submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";

    // Append input field and button to the form
    form.appendChild(inputField);
    form.appendChild(submitButton);

    // Add the form to the body
    document.body.appendChild(form);
    
    console.log("Form has been added to the DOM.");
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Creating and appending form...");
    createAndAppendForm();
});
