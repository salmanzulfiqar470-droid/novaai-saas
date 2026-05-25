// NAVBAR SCROLL

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background =
            "rgba(15,23,42,0.95)";

    }else{

        navbar.style.background =
            "rgba(15,23,42,0.7)";

    }

});

// GLASS HOVER EFFECT

const cards = document.querySelectorAll(".glass-card");

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.transform =
            "translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) scale(1)";

    });

});