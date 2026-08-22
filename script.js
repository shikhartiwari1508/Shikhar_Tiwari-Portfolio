/*=========================
Typing Effect
=========================*/

const roles = [
  "Data Science Student",
  "Web Developer",
  "Python Programmer",
  "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const heading = document.querySelector(".hero h2");

function typeText(){

    if(!heading) return;

    if(charIndex < roles[roleIndex].length){

        heading.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }

    else{

        setTimeout(eraseText,1500);

    }

}

function eraseText(){

    if(charIndex>0){

        heading.textContent=roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }

    else{

        roleIndex++;

        if(roleIndex>=roles.length){

            roleIndex=0;

        }

        setTimeout(typeText,300);

    }

}

window.onload=typeText;


/*=========================
Scroll Reveal
=========================*/

const reveals=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

reveals.forEach(sec=>{

const top=sec.getBoundingClientRect().top;

if(top<window.innerHeight-100){

sec.classList.add("active");

}

});

});


/*=========================
Back To Top
=========================*/

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/*const menuBtn=document.getElementById("menuBtn")
const sidebar=document.getElementById("sidebar")
menuBtn.onclick =()=>{
    sidebar.classList.toggle("active")
}*/