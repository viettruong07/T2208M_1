let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

// var swiper = new Swiper(".gallery-slider", {
//     grabCursor:true,
//     loop:true,
//     centeredSlides:true,
//     spaceBetween:20,
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0:{
//             slidesPerView:1,
//         },
//         700:{
//             slidesPerView:2,
//         },
//     }
// });

const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect:"cube",
    grabCursor: true,
    cubeEffect:{
        shadow:true,
        slideShadows:true,
        shadowOffset:20,
        shadowScale:0.94,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },


});

function myAlert(){
    alert("We glad to see your message");
}
function myAlert2(){
    alert("Thanks your subscribe")
}


