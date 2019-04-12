let menu = [...document.querySelectorAll(".menu li")];
let content = [...document.querySelectorAll(".content div")];
let crrentIndex = 0;
menu.forEach((item, index) => {
    item.onclick = function() {
        document.querySelector(".active") ? document.querySelector(".active").classList.remove("active") : "";
        item.classList.add("active");
        content[index].style.display = "block";
        content[crrentIndex].style.display = "none";
        crrentIndex = index;
    }
})