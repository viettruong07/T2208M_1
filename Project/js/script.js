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



function checkemail(){
  var check1 = document.getElementById('email')
  var email = document.getElementById('feedBackEmail');
  var regExp = /^\w+@[a-zA-Z]+\.com$/i;
  if (!regExp.test(check1.value)){
      email.textContent = 'Invalid form email!';
      email.style.color = 'brown'
  }else {
      email.textContent = '';
  }
}
var activeEmail = document.getElementById('email');
activeEmail.onblur = checkemail;

function checkpassword(){
  var matkhau = document.getElementById('feedBackPassword');
  if (this.value.length < 5){
      matkhau.textContent = 'password must be more 5 characters!'
      matkhau.style.color = 'brown'
  }else {
      matkhau.textContent = '';
  }
}
var activePassword = document.getElementById('password');
activePassword.onblur = checkpassword;

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
  
    
  
    
  });

function myAlert(){
    
    alert("Thank you for your subscribe")
}
function myAlert2(){
    
    alert("We're gonna send you a online-ticket into your email,many thanks")
}
function myAlert1(){
    alert("Thank you for your message")
}
function myAlert3(){
  alert("Login Successful")
}


let mainContainer = document.querySelector(".container-r")
let mainThankyou = document.querySelector(".thank-you")
let submit = document.getElementById("first")
let rateAgain = document.getElementById("rate-again")
let rating = document.querySelector(".rating")
let rates = document.querySelectorAll(".ctr")

// let contact = document.getElementById("contact-submit")
// let containerR = document.querySelector(".container-r")
// document.querySelector("#contact-submit").onclick = () =>{
//     containerR.classList.toggle('active');
    
// }


rates.forEach((rate) =>{
    rate.addEventListener("click",()=>{
        rating.innerHTML = rate.innerHTML
    })
})


submit.addEventListener("click",()=>{
    mainThankyou.classList.remove("hidden")
    mainContainer.style.display = 'none'
})

rateAgain.addEventListener("click",()=>{
    mainThankyou.classList.add("hidden")
    mainContainer.style.display = 'block'
});

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
// let show = document.getElementById("contact-submit")
// let ratingForm = document.querySelector(".container-custom")

// show.addEventListener("click",()=>{
//     if(ratingForm.style.display == 'none'){
//         ratingForm.style.display = 'block';
//     }else{
//         ratingForm.style.display = 'none';
//     }
// });

