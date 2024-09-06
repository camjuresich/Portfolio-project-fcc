const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const words = document.querySelectorAll(".word");
const heroRoles = document.getElementById("hero-roles");

function cycleRoles() {
    index = 1;
    return () => {
        if (index === words.length) index = 0;
        const star = document.querySelector(".star");
        star.classList.remove("star");
        words[index].classList.add("star");
        index++;
    };
}

setInterval(cycleRoles(), 1500);

function toggleMenu () {
    menuIcon.classList.toggle("menu-toggled");
    menu.classList.toggle("menu-hidden");
}

menuIcon.addEventListener("click", toggleMenu);

for (const child of menu.children) {
    child.addEventListener("click", toggleMenu)
}
// menu.children("click", toggleMenu)
