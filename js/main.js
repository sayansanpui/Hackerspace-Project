const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active2');
        bar.classList.add('active3');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active2');
        bar.classList.remove('active3');
    })
}

