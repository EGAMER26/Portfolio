




function projetos() {

    
    gsap.to(".lua", {x:-900, duration:2, rotate:280, ease: "back"});
    gsap.to(".lua1", {x:-900, duration:4, rotate:50, ease: "back"});
    gsap.to(".lua2", {x:-900, y:-50, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua3", {x:-900, y:200, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua4", {x:-900, duration:3, rotate:50, ease: "back"});
    
    gsap.to(".eclipse", {x:-970, duration:3, rotate:50, ease: "back"});
    
    gsap.to(".content", {opacity:0,x:-1000 , ease: "slow" ,duration:1});
    
    gsap.to(".divsecond", {opacity:1, duration:3, ease: "back", });
    gsap.to("nav", {x:200, y:60, duration:3, ease: "back"});
}
function homee() {
    myProjectsout();
    home()
}

function home() {

    gsap.to(".lua", {x:0, duration:2, rotate:280, ease: "back"});
    gsap.to(".lua1", {x:0, duration:4, rotate:50, ease: "back"});
    gsap.to(".lua2", {x:0, y:-50, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua3", {x:0, y:100, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua4", {x:0, duration:3, rotate:50, ease: "back"});
    
    gsap.to(".eclipse", {x:0, duration:3, rotate:50, ease: "back"});
    
    gsap.fromTo(".content", {opacity:0, x:-1000}, {opacity:1, x:0, duration:2 ,ease: "back",force3d:true});
    
    gsap.to(".divsecond", {opacity:0, duration:1, ease: "back", });
    gsap.to("nav", {x:0, y:0, duration:3, ease: "back"});
    
}

function waves() {
    gsap.fromto(".lua", {x:30,y:20 , duration:3, rotate:100, ease: "power1", yoyo:true});
    gsap.to(".lua1", {x:-30,y:-20 , duration:3, rotate:100, ease: "power1", yoyo:true});
    gsap.to(".lua2", {x:10,y:15 , duration:3, rotate:100, ease: "power1", yoyo:true});
    gsap.to(".lua3", {x:20,y:20 , duration:3, rotate:100, ease: "power1", yoyo:true});
    gsap.to(".lua4", {x:70,y:40 , duration:3, rotate:100, ease: "power1", yoyo:true});
    
    gsap.to(".eclipse", {x:0, duration:3, rotate:50, ease: "back"});
}
function work() {
    projetos();
    myProjectson()
    
    }


// ----------------------------IFRAME------------------------------------
var iframeclick = document.querySelector('.projetos .iframe')
var iiiframeclick = document.querySelector('.projetos iframe')


function myProjectson() {
    gsap.to(".iphone5", {x:1402, y:-1050, duration:3, ease: "elastic.out(1,1, 0.6)"})
 }
 function myProjectsout() {
     gsap.to(".iphone5", {y:700, duration:3, ease:"back"})
 
 }
function iiframeclick() {
    if (iiiframeclick.classList.contains('iframeclick')) { 
    iiiframeclick.classList.remove('iframeclick')}
    else {
        iiiframeclick.classList.add('iframeclick')
    }
}
function iiframehover() {
    if (iframeclick.classList.contains('iframehover')) { 
    iframeclick.classList.remove('iframehover')}
    else {
        iframeclick.classList.add('iframehover')
    }
}

//----------------------------------DOCTOR---------------------------------
var doctorrclick = document.querySelector('.projetos .doctor')

function doctorclick() {
    if (doctorrclick.classList.contains('doctorclick')) { 
    doctorrclick.classList.remove('doctorclick')}
    else {
        doctorrclick.classList.add('doctorclick')
    }
}
function doctorhover() {
    gsap.to(".doctor", {x:-500,y:200 , duration:1, ease: "power1", yoyo:true})
}

