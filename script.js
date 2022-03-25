//JS cho thanh Menu
const menubar = document.querySelector(".menu-bar")
menubar.addEventListener("click", function () {
    menubar.classList.toggle("active")
    document.querySelector(".menu-items").classList.toggle("active")
})
const Top = document.querySelector(".top")
window.addEventListener("scroll", function () {
    const x = this.pageYOffset;
    if (x > 80) {
        Top.classList.add("active")
    } else {
        Top.classList.remove("active")
    }

})
//JS cho menu
const menuTitle = document.querySelector(".menu-title");
menuTitle.addEventListener("click", function (x) {
    if (x.target.classList.contains("menu-button")) {
        const Target = x.target.getAttribute("data-title");
        menuTitle.querySelector(".active").classList.remove("active");
        x.target.classList.add("active");
        const dogItem = document.querySelector(".menu");
        dogItem.querySelector(".menu-item-content.active").classList.remove("active");
        dogItem.querySelector(Target).classList.add("active")
    }
})

