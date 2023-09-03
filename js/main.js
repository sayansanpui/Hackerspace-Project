const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const body = document.getElementById('bddy');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active2');
        bar.classList.add('active3');
        body.classList.add('active4');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active2');
        bar.classList.remove('active3');
        body.classList.remove('active4');
    })
}


var dlmode = document.getElementById('dl-mode');

dlmode.onclick = function() {
    document.body.classList.toggle("light-theme");
    if (document.body.classList.contains("light-theme")) {
        dlmode.src = "../assets/images/moon.png"
    } else {
        dlmode.src = "../assets/images/sun.png"
    }
}

