
document.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let newOpacity = 1; 

    if (scrollTop > 50) { 
        newOpacity = 0.5 
    }

    document.querySelector('.navbar').style.backgroundColor = `rgba(255, 255, 255, ${newOpacity})`; 
});

