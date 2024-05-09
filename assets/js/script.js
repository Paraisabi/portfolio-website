console.log("hello")

if(jQuery) {
    console.log("jquery loaded")
} else {
    console.log("no jquery")
}

let mobileMenuOpen = false;

$("#mobile-menu-button").click(function() {
    if (mobileMenuOpen == false) {
        $("#main-menu").removeClass("display-none-mobile");
        mobileMenuOpen = true;
        $("#mobile-menu-text").text("Close");
        $("#mobile-menu-icon").attr("src", "../imgs/close.svg");
    } else {
        $("#main-menu").addClass("display-none-mobile");
        mobileMenuOpen = false;
        $("#mobile-menu-text").text("Menu");
        $("#mobile-menu-icon").attr("src", "../imgs/menu.svg");
    }
});

// This chunk of code is for the "Music" page redirection
function togglePopup() { 
    $(".content").toggle(); 
}

function redirect() {
    location.replace("https://paraisabi.github.io/portfolio-website/");
}

// setTimeout(function() {
//     redirect();
// }, 10000);
// End of code for the "Music" page redirection  

// This chunk of code is for the "Design" page slideshow
let slideIndex = 1;
displaySlide(slideIndex);
 
function moveSlides(n) {
    displaySlide(slideIndex += n);
}
 
function activeSlide(n) {
    displaySlide(slideIndex = n);
}
 
/* Main function */
function displaySlide(n) {
    let i;
    let totalslides =
        document.getElementsByClassName("slide");
    let totaldots =
        document.getElementsByClassName("footerdot");
 
    if (n > totalslides.length) {
        slideIndex = 1;
    }
 
    if (n < 1) {
        slideIndex = totalslides.length;
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    for (i = 0; i < totaldots.length; i++) {
        totaldots[i].className =
            totaldots[i].className.replace(" active", "");
    }
    totalslides[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " active";
}
// End of code for "Design" page slideshow
