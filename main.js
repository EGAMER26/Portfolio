


function work() {

    
    gsap.to(".lua", {x:-900, duration:2, rotate:280, ease: "back"});
    gsap.to(".lua1", {x:-900, duration:4, rotate:50, ease: "back"});
    gsap.to(".lua2", {x:-900, y:-50, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua3", {x:-900, y:200, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua4", {x:-900, duration:3, rotate:50, ease: "back"});
    
    gsap.to(".eclipse", {x:-970, duration:3, rotate:50, ease: "back"});
    
    gsap.to(".content", {opacity:0, duration:.4});
    
    gsap.to(".divsecond", {x:200, y:60, duration:3, ease: "back", });
    gsap.to("nav", {x:200, y:60, duration:3, ease: "back"});
}

function home() {
    gsap.to(".lua", {x:0, duration:2, rotate:280, ease: "back"});
    gsap.to(".lua1", {x:0, duration:4, rotate:50, ease: "back"});
    gsap.to(".lua2", {x:0, y:-50, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua3", {x:0, y:200, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua4", {x:0, duration:3, rotate:50, ease: "back"});
    
    gsap.to(".eclipse", {x:0, duration:3, rotate:50, ease: "back"});
    
    gsap.fromTo(".content", {opacity:0}, {opacity:1, duration:4,force3d:true});
    
    gsap.to(".divsecond", {x:-200, y:0, duration:3, ease: "back", });
    gsap.to("nav", {x:0, y:0, duration:3, ease: "back"});
    
}