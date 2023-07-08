
//scroll sections
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

