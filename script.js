// Get references to the button and the text to be displayed
const toggleButton = document.getElementById('toggleButton');
const displayText = document.getElementById('displayText');

// Add a click event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the display property of the text element
    if (displayText.style.display === 'none' || displayText.style.display === '') {
        displayText.style.display = 'block'; // Show the text
    } else {
        displayText.style.display = 'none'; // Hide the text
    }
});
