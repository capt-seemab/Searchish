// nav toggle only for mobile widths
const menu = document.querySelector(".menu")
const navLinks = document.querySelector(".nav-links")
const links = document.querySelectorAll(".nav-links li")

menu.addEventListener("click", () => {
  menu.classList.toggle("change");
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fadeMenu")
  })

})
// nav toggle only for mobile widths



// parallax effect start 
let stars = document.getElementById("stars")
let background = document.getElementById("background")
let moon = document.getElementById("moon")

window.addEventListener('scroll', () => {
  let value = window.scrollY
  stars.style.left = value * 0.25 + "px"
  moon.style.left = value * 1.1 + "px"

})
// parallax effect end 

// vibrate 
function vibrate(ms){
 navigator.vibrate(ms)
}
// vibrate end


// glider start 
new Glide('.series', {
  type: "carousel",
  perView: 5,
  focusAt: "center",
  gap: 40,
  breakpoints: {
      1200: {
          perView: 3
      },
      800: {
          perView: 2
      }
  }
}).mount()



new Glide('.movies', {
  type: "carousel",
  perView: 5,
  focusAt: "center",
  gap: 40,
  breakpoints: {
      1200: {
          perView: 3
      },
      800: {
          perView: 2
      }
  }
}).mount()

new Glide('.novels', {
  type: "carousel",
  perView: 5,
  focusAt: "center",
  gap: 40,
  breakpoints: {
      1200: {
          perView: 3
      },
      800: {
          perView: 2
      }
  }
  
}).mount()
 
// glider end 





// default fruit fly bug:
new BugController({
});

// default spiders:
new SpiderController({
});


