// src/index.js

export async function makeRequest() {
    const url = "https://webhook.site/41b3fa6e-82f9-4bcc-af04-46260100132c";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        console.log("Response from the server:", data);
        return data;
    } catch (error) {
        console.error("Error making GET request:", error);
        throw error;
    }
}
