// src/index.js

export async function makeRequest() {
    const url = "https://webhook.site/#!/view/eb775c30-1e6a-4540-884a-132354edbda6/6fd26bb8-6a6a-47eb-b5e9-5084aca66b22/1";

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
