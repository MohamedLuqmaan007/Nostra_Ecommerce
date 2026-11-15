
let images = [
    "./images/j2zi31lqofw1abqfrjux.jpg",
    "./images/urban-fashion-movement-stockcake.jpg",
    "./images/j2zi31lqofw1abqfrjux.jpg",
    "./images/urban-fashion-movement-stockcake.jpg",
    "./images/j2zi31lqofw1abqfrjux.jpg",
    "./images/urban-fashion-movement-stockcake.jpg"
];

let currentIndex = 0;

let imgTrack = document.getElementById("imgTrack");

// Create image slides
for (let i = 0; i < images.length; i += 2) {

    let slide = document.createElement("div");
    slide.className = "img-slide";

    let img1 = document.createElement("img");
    img1.src = images[i];

    let img2 = document.createElement("img");
    img2.src = images[i + 1];

    slide.appendChild(img1);
    slide.appendChild(img2);

    imgTrack.appendChild(slide);
}

// Next button
function nextPhoto() {

    let totalSlides = images.length / 2;

    currentIndex = (currentIndex + 1) % totalSlides;

    imgTrack.style.transform =
        `translateX(-${currentIndex * 100}%)`;
}

// Previous button
function prevPhoto() {

    let totalSlides = images.length / 2;

    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;

    imgTrack.style.transform =
        `translateX(-${currentIndex * 100}%)`;
}

const container = document.getElementById("productContainer");

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

// Scroll right
rightBtn.addEventListener("click", function() {
    container.scrollBy({
        left: 340,
        behavior: "smooth"
    });
});

// Scroll left
leftBtn.addEventListener("click", function() {
    container.scrollBy({
        left: -340,
        behavior: "smooth"
    });
});

// Heart button
const hearts = document.querySelectorAll(".heart");

hearts.forEach(function(heart) {

    heart.addEventListener("click", function() {

        heart.classList.toggle("active");

        if (heart.classList.contains("active")) {
            heart.innerHTML = "♥";
        } else {
            heart.innerHTML = "♡";
        }

    });

});

const form = document.getElementById("newsletterForm");

const email = document.getElementById("email");

const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    message.innerHTML = "Thank you for subscribing!";

    email.value = "";

});
// OFFER BAR CLOSE

var offerBar = document.querySelector(".offer-bar");

document.getElementById("offer-close").addEventListener("click", function () {
    offerBar.style.display = "none";
});

/* SIDE NAVBAR */

var sidenav = document.querySelector(".side-navbar");

var menu = document.getElementById("side-navbar-activate");

var close = document.getElementById("side-navbar-close");

menu.addEventListener("click", function () {
    sidenav.classList.add("active");
});

close.addEventListener("click", function () {
    sidenav.classList.remove("active");
});
