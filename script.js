// Dropdown Menu
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.drop')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

/* Index / Home */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}
        
function currentSlide(n) {
    showSlides(slideIndex = n);
}
        
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

$(document).ready(function(){
});

function resizeFunction(x) {
    if (x.matches) {
        $("#content-text p").animate({fontSize: '14px'}, "slow");
    }
    else {
        $("#content-text p").animate({fontSize: '24px'}, "slow");
    }
}

var x = window.matchMedia("(max-width: 800px)")
resizeFunction(x)


/*
window.addEventListener('scroll',()=>{
    let content = document.querySelector('.gf');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }
    else{
        content.classList.remove('active');
    }
});
*/