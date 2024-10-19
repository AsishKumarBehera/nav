const mobile_navbar = document.querySelector('.mobile-navbar');
const nav_header = document.querySelector('.header');

const ToggleNavbar = () => {
    // alert('Toggle navigation')    
    nav_header.classList.toggle("active")
}
mobile_navbar.addEventListener('click', () => ToggleNavbar())