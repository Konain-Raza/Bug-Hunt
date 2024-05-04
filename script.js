


let hamberger = document.querySelector(".hamberger");
let mobileNav = document.querySelector(".nav-list");
let bars = document.querySelectorAll(".hamberger span");
var isActive = true;
var isActive = false; 
hamberger.addEventListener("click", () => {
  if (isActive) {
    mobileNav.classList.remove("open");
    mobileNav.style.display = "none"; 
    bars[0].style.transform = "rotate(0deg)";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "rotate(0deg)";
    isActive = false;
  } else {
    mobileNav.classList.add("open");
    mobileNav.style.display = "block";
    bars[0].style.transform = "rotate(-45deg)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(45deg)";
    isActive = true;
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