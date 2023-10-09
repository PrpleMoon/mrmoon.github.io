
let button = document.getElementById('toggleButton');
let count = 0;

button.addEventListener('click', function() {
    count++;
    if (count % 2 === 1) {
        alert('cattiva marghe ');
    }
});
