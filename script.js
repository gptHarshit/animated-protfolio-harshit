// function revealToSpan() {
//     document.querySelectorAll(".reveal")
//         .forEach(function (elem) {
//             let parent = document.createElement("span");
//             let child = document.createElement("span");

//             parent.classList.add("parent");
//             child.classList.add("child");

//             child.innerHTML = elem.innerHTML;
//             parent.appendChild(child);

//             elem.innerHTML = "";
//             elem.appendChild(parent);
//         })
// }




// functionToAnimation()
// {
//     var tl = gsap.timeline()

//     tl
//         .from(".child span", {
//             x: 100,
//             duration: 1.4,
//             stagger: .2,
//             ease: Power3.easeInOut
//         })


//         .to("#loder", {
//             height: 0,
//             durration: 1.,
//             ease: Circ.easeInOut
//         })


//         .to("#green", {
//             height: "100%",
//             top: 0,
//             delay: -.8,
//             durration: 1,
//             ease: Circ.easeInOut
//         })

//         .to("#green", {
//             height: "0%",
//             delay: -.5,
//             durration: 1,
//             ease: Circ.easeInOut
//         })



// }

// function animatesvg() {
//     document.querySelectorAll("#Visual>g").forEach(function (e) {
//         var character = e.childNodes[1].childNodes[1]
//         character.style.strokeDasharray = character.getTotalLength() + 'px';
//         character.style.strokeDashoffset = character.getTotalLength() + 'px';
//     })
// }

// gsap.to("#Visual>g>g>path","#Visual>g>g>poliline" , {
//     strokeDashoffset : 0,
//     duration: 2,
//     ease: Expo.easeInOut,
//     delay: 2

// })
// revealToSpan();
// functionToAnimation();
function Animationsetter() {
    gsap.set("#nav a", { y: "-100%", opacity: 0 });
    gsap.set("#home span .child", { y: "100%" })
    gsap.set("#home .row img", { opacity: 0 })
}
function revealToSpan() {
    document.querySelectorAll(".reveal")
        .forEach(function (elem) {
            let parent = document.createElement("span");
            let child = document.createElement("span");

            parent.classList.add("parent");
            child.classList.add("child");

            child.innerHTML = elem.innerHTML;
            parent.appendChild(child);

            elem.innerHTML = "";
            elem.appendChild(parent);
        });
}

function functionToAnimation() {
    var tl = gsap.timeline();

    tl
        .from("#loder .child span", {
            x: 100,
            duration: 1.4,
            stagger: 0.2,
            ease: Power3.easeInOut
        })
        .to("#loder .parent .child", {
            y: "-110%",
            duration: 1,
            ease: Circ.easeInOut
        })
        .to("#loder", {
            height: 0,
            duration: 1, // Corrected spelling from "durration" to "duration"
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: "100%",
            top: 0,
            delay: -0.8,
            duration: 1, // Corrected spelling from "durration" to "duration"
            ease: Circ.easeInOut
        })
        .to("#green", {
            height: "0%",
            delay: -0.5,
            duration: 1, // Corrected spelling from "durration" to "duration"
            ease: Circ.easeInOut,
            onComplete: function () {
                animateHomepage();
            }
        });
}

function animatesvg() {
    document.querySelectorAll("#Visual>g").forEach(function (e) {
        var character = e.childNodes[1].childNodes[1];
        character.style.strokeDasharray = character.getTotalLength() + 'px';
        character.style.strokeDashoffset = character.getTotalLength() + 'px';
    });
}

gsap.to("#Visual>g>g>path, #Visual>g>g>polyline", { // Corrected "poliline" to "polyline" and comma-separated selectors
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut,
    delay: 5
});

function animateHomepage() {


    var tl = gsap.timeline();

    tl.to("#nav a", {
        stagger: 0.05,
        y: 0,
        opacity: 1,
        ease: Expo.easeInOut
    })

    tl.to("#home .parent .child ", {
        stagger: 0.1,
        y: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    tl.to("#home .row img ", {
        // stagger: 0.05,
        // y: 0,
        opacity: 1,
        ease: Expo.easeInOut,
        onComplete : function() {
            animatesvg(); 
        }
    })

}

revealToSpan();
Animationsetter();

functionToAnimation();
// Ensure animatesvg function is called

