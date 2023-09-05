const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const body = document.getElementById('bddy');

if (bar) {
    bar.addEventListener('click', () => {
        bar.classList.add('active3');
        body.classList.add('active4');
        nav.classList.add('active2');
    })
}

if (close) {
    close.addEventListener('click', () => {
        bar.classList.remove('active3');
        body.classList.remove('active4');
        nav.classList.remove('active2');
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





const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));



var loader = document.getElementById('preloader');

window.addEventListener("load", function(){
    loader.style.display = "none";
})