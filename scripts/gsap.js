gsap.registerPlugin(ScrollTrigger);

let selectAll = document.querySelectorAll("h1");
selectAll.forEach(h1 => {
    gsap.from(h1, {
        scrollTrigger: {
            trigger: h1,
            start: "top 80%", 
            toggleActions: "play none none reset" 
        },
        y: 30,           
        opacity: 0,     
        duration: 1.5,   
        delay: 0       
    });
});
