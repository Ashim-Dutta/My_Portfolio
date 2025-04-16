Shery.textAnimate("h1,h2,h3", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});


Shery.makeMagnet(".nav-links" , {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
})
Shery.makeMagnet(".tech-card", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
})

document.addEventListener("mousemove", function (dets) { 
    gsap.to(".key", {
        x: dets.x,
        y: dets.y-`2vw`,
    })
})
document.querySelector(".second").addEventListener("mouseenter", function (e) { 
    gsap.to(".key", {
      opacity: 1,
    })
})
document.querySelector(".second").addEventListener("mouseleave", function () { 
    gsap.to(".key", {
        opacity:0 ,
    })
})
Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

  document.addEventListener("mousemove", function (dets) { 
    gsap.to(".c-1 ", {
        x: dets.x,
        y: dets.y-`2vw`,
    })
})
document.querySelector(".certificate-1").addEventListener("mouseenter", function (e) { 
    gsap.to(".c-1", {
  opacity: 1, 
  duration: 1,    
  ease: "power2.out",
  // transformOrigin: "center center"
})
})
document.querySelector(".certificate-1").addEventListener("mouseleave", function () { 
    gsap.to(".c-1", {
      opacity: 0,
    })
})

  document.addEventListener("mousemove", function (dets) { 
    gsap.to(".c-2 ", {
        x: dets.x,
        y: dets.y-`2vw`,
    })
})
document.querySelector(".certificate-2").addEventListener("mouseenter", function (e) { 
    gsap.to(".c-2", {
  opacity: 1, 
  duration: 1,    
  ease: "power2.out",
  // transformOrigin: "center center"
})
})
document.querySelector(".certificate-2").addEventListener("mouseleave", function () { 
    gsap.to(".c-2", {
      opacity: 0,
    })
})


document.querySelector("#projects").addEventListener("click", function(e) {

  gsap.to(window, {
    duration: 1,
    scrollTo: ".section-6",
    ease: "power2.out"
  });
});

document.querySelector("#about").addEventListener("click", function(e) {
  gsap.to(window, {
    duration: 1,
    scrollTo: ".section-2",
    ease: "power2.out"
  });
});



  