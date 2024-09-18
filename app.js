const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const words = document.querySelectorAll(".word");
const heroRoles = document.getElementById("hero-roles");
const hero = document.getElementById('hero')
const projects = document.getElementById('projects')
const projectOne = document.querySelector('.project-one')
const projectTwo = document.querySelector('.project-two')
const projectThree = document.querySelector('.project-three')
const about = document.getElementById('about')
const homeLargeBtn = document.getElementById('home-large')
const projectsLargeBtn = document.getElementById('projects-large')
const aboutLargeBtn = document.getElementById('about-large')
const homeSmallBtn = document.getElementById('home-small-btn')
const projectOneBtn = document.getElementById('project-one-btn')
const projectTwoBtn = document.getElementById('project-two-btn')
const projectThreeBtn = document.getElementById('project-three-btn')
const aboutSmallBtn = document.getElementById('about-btn')
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

function scrollSnaps (section) {
    document.querySelector('html').style.scrollSnapType = 'none'
    section.scrollIntoView({behavior: "smooth"})
    setTimeout(() => {
        document.querySelector('html').style.scrollSnapType = 'y mandatory'
    }, 500)
}
homeLargeBtn.addEventListener('click', () => scrollSnaps(hero))
projectsLargeBtn.addEventListener('click', () => scrollSnaps(projects))
aboutLargeBtn.addEventListener('click', () => scrollSnaps(about))
homeSmallBtn.addEventListener('click', () => scrollSnaps(hero))
projectOneBtn.addEventListener('click', () => scrollSnaps(projectOne))
projectTwoBtn.addEventListener('click', () => scrollSnaps(projectTwo))
projectThreeBtn.addEventListener('click', () => scrollSnaps(projectThree))
aboutSmallBtn.addEventListener('click', () => scrollSnaps(about))
setInterval(cycleRoles(), 1500);

function toggleMenu () {
    menuIcon.classList.toggle("menu-toggled");
    menu.classList.toggle("menu-hidden");
    // setTimeout(() => {
        // document.querySelector('html').style.scrollSnapType = 'y mandatory'

    // }, 700)
}



menuIcon.addEventListener("click", toggleMenu);

for (const child of menu.children) {
    child.addEventListener("click", toggleMenu)
}
// menu.children("click", toggleMenu)
