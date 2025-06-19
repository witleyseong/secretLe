const message = document.getElementById('mess');
const box = document.getElementById('box');

box.addEventListener('click', () => {
    box.style.display = 'none';
    message.style.display = 'block';
});