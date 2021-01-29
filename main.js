
window.addEventListener("scroll", function(){
    const logo = document.querySelector(".logo img");
    const mainNav = document.querySelector("#mainNav");


if (window.pageYOffset > 0) {
    logo.style.height = "75px";
    mainNav.classList.add("bg-black");
    mainNav.classList.add("txt-white");
} else {
    logo.style.height = "85px";
    mainNav.classList.remove("bg-black");
    mainNav.classList.remove("txt-white");
}
});

