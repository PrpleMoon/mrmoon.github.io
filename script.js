document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.download-button');
    const downloadLink = 'https://github.com/PrpleMoon/Purples-Pack/releases/download/download/Purples.Pack.1.0.0.mrpack'; // Replace with your actual download link

    downloadButton.addEventListener('click', function() {
        window.location.href = downloadLink;
    });
});
