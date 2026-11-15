
var sidenav = document.querySelector(".side-navbar");

var menu = document.getElementById("side-navbar-activate");

var close = document.getElementById("side-navbar-close");

menu.addEventListener("click", function () {
    sidenav.style.left = "0";
});

close.addEventListener("click", function () {
    sidenav.style.left = "-60%";
});
var sidenav = document.querySelector(".side-navbar");
var menu = document.getElementById("side-navbar-activate");
var close = document.getElementById("side-navbar-close");

menu.addEventListener("click", function () {
    sidenav.classList.add("active");
});

close.addEventListener("click", function () {
    sidenav.classList.remove("active");
});