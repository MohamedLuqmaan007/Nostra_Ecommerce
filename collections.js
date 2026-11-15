
// OFFER BAR CLOSE

var offerBar = document.querySelector(".offer-bar");

document.getElementById("offer-close").addEventListener("click", function () {
    offerBar.style.display = "none";
});


// SIDE NAVBAR

var sidenav = document.querySelector(".side-navbar");

var menu = document.getElementById("side-navbar-activate");

var close = document.getElementById("side-navbar-close");

menu.addEventListener("click", function () {
    sidenav.classList.add("active");
});

close.addEventListener("click", function () {
    sidenav.classList.remove("active");
});


// PRODUCT FILTER

var filterList = [];

var tags = document.getElementsByName("tags");

var productList = document.querySelectorAll(".product");


// Add tags to products using their position

var productTags = [
    "summer,black,new",
    "summer,orange,new",
    "party,yellow,new",
    "summer,pink,old",
    "summer,sandal,new",
    "beach,red,old"
];

productList.forEach(function (product, index) {
    product.dataset.tags = productTags[index];
});


// Checkbox Event

tags.forEach(function (tag) {

    tag.addEventListener("change", function (e) {

        if (e.target.checked) {

            filterList.push(e.target.value);

        } else {

            filterList = filterList.filter(function (item) {
                return item !== e.target.value;
            });

        }

        update();

    });

});


// UPDATE FUNCTION

function update() {

    productList.forEach(function (product) {

        var temp = product.dataset.tags;

        var tempFilterArray = temp.split(",");

        var check = filterList.length === 0 ||
            filterList.some(function (item) {
                return tempFilterArray.includes(item);
            });

        if (check) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// SEARCH FUNCTION

var searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {

    var searchValue = searchInput.value.toLowerCase();

    productList.forEach(function (product) {

        var productName = product.querySelector("h2").innerText.toLowerCase();

        var filterMatch = filterList.length === 0 ||
            filterList.some(function (item) {
                return product.dataset.tags.split(",").includes(item);
            });

        var searchMatch = productName.includes(searchValue);

        if (filterMatch && searchMatch) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

});
