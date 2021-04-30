const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97,89,85,87,80,70,50];


window.addEventListener('scroll', ()=>{
    init()
})

function init(){

    if(window.pageYOffset >= navbarOffsetTop){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }

    sections.forEach((section, i) => {
        if(window.pageYOffset >= section.offsetTop - 100){
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove("change")
            })
            navbarLinks[i].classList.add("change")
        }
    })

    if(window.pageYOffset + window.innerHeight >= progress.offsetTop){
        document.querySelectorAll(".progress-bar").forEach((el, i) =>{
            el.querySelector(".progress-percent").style.width = `${progressBarPercents[i]}%` 
            el.querySelector("span").textContent = `${progressBarPercents[i]}%` 
        })
    }
}

init();
window.addEventListener('resize',()=>{
    window.location.reload();
})