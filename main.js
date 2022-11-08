

let backblack = document.querySelector('body')


function projetos() {

    
    gsap.to(".lua", {x:-900, duration:2, rotate:380, ease: "back"});
    gsap.to(".lua1", {x:-900, duration:4, rotate:360, ease: "back"});
    gsap.to(".lua2", {x:-900, y:-50, duration:3, rotate:150, ease: "back"});
    gsap.to(".lua3", {x:-900, y:200, duration:3, rotate:350, ease: "back"});
    gsap.to(".lua4", {x:-900, duration:3, rotate:450, ease: "back"});
    
    gsap.to(".eclipse", {x:-970, duration:3, rotate:50, ease: "back"});
    
    gsap.to(".content", {opacity:0,x:-1000 , ease: "slow" ,duration:1});
    
    
    gsap.to(".divsecond", {opacity:1, duration:3, ease: "back", });
    gsap.to("nav", {x:200, y:60, duration:3, ease: "back"});
    gsap.to(".landpageProjects", {x:700, y:-690, duration:4, ease: "elastic(1, 1)"});
    gsap.to(".cardLegalite", {y:0, duration:2,opacity:1, ease:"back"})
    gsap.to(".cardDoctorCare", {y:0, duration:2, ease:"back"})
    
    // gsap.to(".allMenu", {y:-60, duration:4, ease: "elastic"});
}
function homee() {
    myProjectsout();
    home();
    backbody();
    pclighton()

}

function home() {

    gsap.to(".lua", {x:0, duration:2, rotate:280, ease: "back"});
    gsap.to(".lua1", {x:0, duration:4, rotate:50, ease: "back"});
    gsap.to(".lua2", {x:0, y:-50, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua3", {x:0, y:100, duration:3, rotate:50, ease: "back"});
    gsap.to(".lua4", {x:0, duration:3, rotate:50, ease: "back"});
    
    gsap.to(".eclipse", {x:0, duration:3, rotate:50, ease: "back"});
    
    gsap.fromTo(".content", {opacity:0, x:-1000}, {opacity:1, x:0, duration:2 ,ease: "back",force3d:true});
    
    gsap.to(".divsecond", {opacity:0, duration:1, ease: "back"});
    gsap.to("nav", {x:0, y:0, duration:3, ease: "back"});

    gsap.to(".lua1 a", {opacity:0, ease: "slow" ,duration:1});


    gsap.to(".allMenu", {y:-860, duration:1, ease: "back"});
    gsap.to(".notebook", {y:1000, duration:3, ease: "back"});

    gsap.to(".landpageProjects", {x:1800, y:690, duration:4, ease: "back"});

    gsap.to(".cardLegalite", {duration:.1, opacity:0 })


    
}

let allblack = document.querySelector('body')

function backbody(item, index) {
    if(backblack.classList.contains('bodyback')) {
        backblack.classList.remove('bodyback')
    } else {
        backblack.classList.add('bodyback')
    } // function clickItem(item, index) {
   

    //     backblack.style.removeProperty("--timeOut");
        
    //     if (activeItem == item) return;
        
    //     if (activeItem) {
    //         activeItem.classList.remove("active");
    //     }
    
        
    //     item.classList.add("active");
    //     body.style.backgroundColor = blackback[index];
    //     activeItem = item;
    //     offsetMenuBorder(activeItem, menuBorder);
        
    }
    function outbody(item, index) {
        if(backblack.classList.contains('bodyback')) {
            backblack.classList.remove('bodyback')
        }}

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
    // pcButton();
    outbody()
    
    }


// ----------------------------IFRAME------------------------------------
var iframeclick = document.querySelector('.projetos .iframe')
var iiiframeclick = document.querySelector('.projetos iframe')


function myProjectson() {
    gsap.to(".iphone5", {x:1402, y:-1050, duration:3, ease: "elastic.out(1,1, 0.6)"})

 }
 function myProjectsout() {
     gsap.to(".iphone5", {y:-2000, duration:3, ease:"back"})
 
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



// ------------------------------------------------------------------------------------------------
// Designed by:  Mauricio Bucardo
// Original image:
// https://dribbble.com/shots/5619509-Animated-Tab-Bar

"use strict"; 

const body = document.body;
const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");
const blackback = ["#000"];


function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");
    
    if (activeItem == item) return;
    
    if (activeItem) {
        activeItem.classList.remove("active");
    }

    
    item.classList.add("active");
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
    
    
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});

//----------------------------------MENU---------------------------------

function pcButton() {
    gsap.to(".notebook", {y:-1250, duration:2, ease:"back"});
    gsap.to(".iphone5", {y:-100, duration:2, ease:"back"})
    

    // gsap.to(".lua", {x:-900, duration:2, rotate:380, ease: "back"});

}
function pcOut() {
    gsap.to(".notebook", {y:1000, duration:3, ease: "back"});
    gsap.to(".allMenu", {y:-860, duration:2, ease: "back"});

}

function iphoneButton() {
    gsap.to(".notebook", {y:500, duration:2, ease:"back"});
    gsap.to(".iphone5", {y:1320, duration:2, ease:"back"})
    

    // gsap.to(".lua", {x:-900, duration:2, rotate:380, ease: "back"});

}

// ----------------------------BUTTONS------------------------------------

function buttonLegalite() {
 gsap.to(".allMenu", {y:-60, duration:4, ease: "elastic"});
 gsap.to(".notebook", {y:-1250, duration:2, ease:"back"});
 gsap.to(".iphone5", {y:-100, duration:2, ease:"back"})
 gsap.to(".cardLegalite", {y:-500, duration:2, ease:"back"})
 gsap.to(".cardDoctorCare", {y:500, duration:2, ease:"back"})
 gsap.to(".lua1", {opacity:1, ease: "slow" ,duration:1});

 buttonbackOn()


}
function buttonDoctor() {
    doctor();
    cellphoneOn();
    buttonbackOn()

}


function doctor() {
    buttonbackOn();


    gsap.to(".allMenu", {y:-60, duration:4, ease: "elastic"});
 gsap.to(".notebook", {y:-1250, duration:2, ease:"back"});
 gsap.to(".iphone5", {y:-100, duration:2, ease:"back"})
 gsap.to(".cardLegalite", {y:-500, duration:2, ease:"back"})
 gsap.to(".cardDoctorCare", {y:500, duration:2, ease:"back"})

 gsap.to(".lua1", {opacity:1, ease: "slow" ,duration:1});



}
let pclight = document.querySelector('#one')
let cellight = document.querySelector('#two')

function pclighton() {
    if(cellight.classList.contains('active')) {
        pclight.classList.remove('active')
    } else {
        pclight.classList.add('active')
    }

}
function cellPhone() {
    buttonLegalite();
    cellphoneOn();
    pclighton()
}


function cellighton() {
    if(cellight.classList.contains('active')) {
        cellight.classList.remove('active')
    }

}
// function pclighton() {
//     if(pclight.classList.contains('active')) {
//         pclight.classList.remove('active')
//     } else {
//         pclight.classList.add('active')
//     }

// }
function cellphoneOn() {
    if(cellight.classList.contains('active')) {
        gsap.to(".notebook", {y:500, duration:2, ease:"back"});
        gsap.to(".iphone5", {y:1320, duration:2, ease:"back"})
    }

}

function backbutton() {
    work();
    myProjectsout();
    pcOut()


}
let backon = document.querySelector('.lua1 a')


function buttonbackOn() {
    if (backon.classList.contains('abuttonOn')) {
        backon.classList.remove('abuttonOn')
    } else {
        backblack.classList.add('abuttonOn')
    }

}