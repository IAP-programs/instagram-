const fs = require('fs');
const axios = require('axios');

// Function to make an HTTP GET request
async function makeRequest(url) {
    try {
        const response = await axios.get(url);
        console.log('Response:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Function to create a JavaScript file with custom extension
function createJsFileWithExtension(extension) {
    const filename = `request.${extension}`;
    const jsCode = `
        const axios = require('axios');
        
        // Make an HTTP GET request
        async function makeRequest(url) {
            try {
                const response = await axios.get(url);
                console.log('Response:', response.data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
        
        // Call the function with your URL
        makeRequest('https://jsonplaceholder.typicode.com/posts/1');
    `;
    
    // Write JavaScript code to the file
    fs.writeFileSync(filename, jsCode);
    console.log(`JavaScript file with ${extension} extension created: ${filename}`);
}

// Example usage
const customExtension = 'myjs';  // Change this to your desired extension
createJsFileWithExtension(customExtension);
