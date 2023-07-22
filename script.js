document.addEventListener("mousemove", coordinates); // This is to trigger the coordinates function when the mouse moves...

var coordinates = () => {
    // These are there to get the realtime coordinates of the x and y axis
    const xaxis = event.pageX;
    const yaxis = event.pageY;

    // There are there to set the coordinates of the circle
    setTimeout(() => {
        let circle = document.querySelector("#circle");
        circle.style.top = `${yaxis}px`;
        circle.style.left = `${xaxis}px`;
    }, 100)
}

const rightarrowbutton = document.getElementById("rightarrowbutton");
rightarrowbutton.addEventListener("click", () => {
    // alert("The right arrow button is working fine");
    t1.reverse();

    setTimeout(() => {
        document.querySelector("#speedcoderparth>p").classList.add = flex;
        document.querySelector("#speedcoderparth>p").style.display = flex;

        gsap.from("#speedcoderparth", {
            duration: 1,
            scale: 0.1,
            ease: "expo.easeInOut",
            opacity: 0
        })
    }, 100)

    
})


// This is the part where all the animation is handled using Gsap
const t1 = gsap.timeline();

let animate = () => {
    t1.from("#wrapper", {
        duration: 1,
        scale: 0.1,
        ease: 'export.easeInOut',
        opacity: 0
    }, "-0.5")
    .from("#whitestrip", {
        duration: 1,
        width: 0,
        ease: 'expo.easeInOut',

    }, "-=0.5")
    .from("#blackcard", {
        duration: 1,
        x: 50,
        ease: 'expo.easeInOut',
        opacity: 0
    }, "-=0.5")
    .from("#unleashexperience", {
        duration: 1,
        height: 0,
        ease: 'expo.easeInOut',
        opacity: 0
    }, "-=0.5")
    .from("#linelem", {
        duration: 1,
        width: 0,
        ease: "expo.easeInOut",
        opacity: 0
    }, "-=0.5")
    .from("#blackcardtext", {
        duration: 1,
        y: 40,
        ease: "expo.easeInOut",
        opacity: 0
    }, "-=1")
    .from("#line", {
        duration: 1,
        width: 0,
        ease: "expo.easeInOut",
        opacity: 0
    }, "-=0.5")
}

animate();