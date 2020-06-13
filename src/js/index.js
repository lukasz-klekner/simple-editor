import '../scss/main.scss';

const entry = localStorage.getItem('entry');
let message = '';

const load = document.querySelectorAll('.button--js')[0];
const save = document.querySelectorAll('.button--js')[1];


if (entry) {
    message = entry;
}

const input = document.querySelector('.message--js');
input.value = message;

save.addEventListener('click', () => {
    localStorage.setItem('entry', input.value)
})

load.addEventListener('click', () => {
    input.value = localStorage.getItem('entry');
})