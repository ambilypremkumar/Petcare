/* Sticky header js*/
window.onscroll = function() {
    myFunction();
};

var header = document.getElementById("myHeader");
var placeholder = document.getElementById("headerPlaceholder");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        placeholder.style.height = header.offsetHeight + "px"; // Adjust placeholder height
    } else {
        header.classList.remove("sticky");
        placeholder.style.height = "0"; // Reset placeholder height
    }
}

/* mobile menu show function */
function showMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.add("show");
}
/* mobile menu hide function */

function hideMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.remove("show");
}

// JavaScript for automatic slider movement
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slider .imgBx");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.transform = "translateX(0)";
            } else {
                slide.style.transform = "translateX(-100%)";
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); 
});
