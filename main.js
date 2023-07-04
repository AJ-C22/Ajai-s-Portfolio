
//scroll sections
window.onscroll = () => {
    //sticky header
    let navbar = document.querySelector('header');

    navbar.classList.toggle('sticky', window.scrollY > 100);
}