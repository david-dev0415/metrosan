'use strict';

window.onload = load();


// Functions

function load() {
    contentToLoad();
    stickyNavbar();
}

function loadHtmlContent(e) {
    
    e.preventDefault();    

}

function stickyNavbar() {
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".nav");
        navbar.classList.toggle("sticky", window.scrollY > 0)
    })    
}


function contentToLoad() {
    
    // Load Navbar and footer

    $('#footer-section').load('../common/footer.html');
    $('#navbar-section').load('../common/navbar.html');    
    $('#slider-section').load('../common/slider.html');
    
}

