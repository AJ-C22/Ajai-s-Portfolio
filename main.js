
//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('navbar nav a');

function changeBg(){
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navbar.classList.remove('bgColor');
    }
    else{
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);

let about = document.getElementById("about");

function openAbout(){
    about.classList.toggle("open-about");

}

function closeAbout(){
    about.classList.remove("open-about");
}

var messageArray = ["Aspiring Data Scientist / Developer"];
var textPosition = 0;
var speed = 80;

typewriter = () => {
    document.querySelector('#message').
    innerHTML = messageArray[0].substring(0,textPosition) + "<span>\u25ae</span>"

    if (textPosition++ != messageArray[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter)

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('navbar nav a[href*=' + id + ']').classList.add('active');
            });
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}



