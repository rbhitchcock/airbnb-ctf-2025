async function makeRequest() {
    const url = "https://webhook.site/41b3fa6e-82f9-4bcc-af04-46260100132c";

    try {
        console.log("Starting fetch request...");
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.text();
        console.log("Response from the server:", data);

        return data;
    } catch (error) {
        console.error("Error during GET request:", error);
    }
}

// Ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
    console.log("DOM fully loaded, making request...");
    await makeRequest();
});

// Exporting the function in case it needs to be manually invoked elsewhere
if (typeof window !== "undefined") {
    window.makeRequest = makeRequest;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { makeRequest };
}
