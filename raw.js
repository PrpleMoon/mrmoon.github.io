// githubRawFetcher.js

// Function to fetch the raw text file from GitHub
function fetchGithubRawFile(url, elementId) {
    fetch(url)
    .then(response => response.text())
    .then(data => {
        // Display the fetched content on the website
        document.getElementById(elementId).innerText = data;
    })
    .catch(error => console.error('Error fetching GitHub raw file:', error));
}
