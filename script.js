


let hamberger = document.querySelector(".hamberger");

let mobileNav = document.querySelector(".nav-list");
 // Set initial display to block


let bars = document.querySelectorAll(".hamberger span");

let isActive = false;

hamberger.addEventListener("click", () => {
isActive=true;

mobileNav.classList.toggle("open");
if (!isActive) {

bars[0].style.transform = "rotate(-45deg)";

bars[1].style.opacity = "0";

bars[2].style.transform = "rotate(45deg)";

isActive = true;
} else {
    mobileNav.style.display = "block";

bars[0].style.transform = "rotate(0deg)";

bars[1].style.opacity = "1";

bars[2].style.transform = "rotate(0deg)";

isActive = false;
}
});

window.addEventListener("load", function () {
    addRequiredClasses();
    });
    

    
    window.addEventListener("resize", () => {
    addRequiredClasses();
    });
    
    function addRequiredClasses() {
    if (window.innerWidth < 860) {
    mobileNav.style.display = "none";
    document.body.classList.add("mobile");
    } else {
    mobileNav.style.display = "flex";
    
    document.body.classList.remove("mobile");
    }
    }