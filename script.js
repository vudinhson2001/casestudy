const menubar = document.querySelector(".menu-bar")
menubar.addEventListener("click", function () {
    menubar.classList.toggle("active")
document.querySelector(".menu-items").classList.toggle("active")
})
const Top= document.querySelector(".top")
window.addEventListener("scroll",function (){
    const x = this.pageYOffset;
    if(x>80){Top.classList.add("active")}
    else{Top.classList.remove("active")}

 })