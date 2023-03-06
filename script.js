


let menuBtn = document.querySelector( ".menu-btn")
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");


const menuBtnOnClick = () => {
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  navBar.classList.add("active");
  body.style.overflow = "hidden";
}

const cancelBtnOnClick = () => {
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  navBar.classList.remove("active");
  body.style.overflow = "auto";
}


// Sticky Nav Menu

let val;
let nav = document.querySelector("nav");
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  }else{
    nav.classList.remove("sticky");
  }
}
console.log()

// Side Nav Menu Closed When Nav Links Clicked


let navLinks = document.querySelectorAll(".menu li a");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () =>{
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto";
  });
}
console.log()

// Scroll Button

let scrollBtn = document.querySelector(".scroll-btn i");

function PageScroll(){
  for (let i = 0; i < scrollBtn.length; i++) {
    scrollBtn[i].addEventListener('click', () =>{
    let currentBtn = document.querySelector('active');
    currentBtn[0].className = currentBtn[0].className.replace('active','');
    className += 'active-btn';
    })
  }
}

// Contact

function sendMail () {
  let params = {
    from_name : document.getElementById("fullName").value,
    email_id : document.getElementById("email_id").value,
    message : document.getElementById("message").value,
  };
  
const serviceID = "service_l2q128e"
const templateID = "template_d0fu7mm"

emailjs.send(serviceID,templateID,params)
.then(
  res =>{
    document.getElementById("fullName").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("your message sent successfully");
  })
  .catch((err)=>console.log(err))
}