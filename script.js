/*var mainImg= document.getElementById("mainImg");
var smallImg= document.getElementsByClassName("smallImg");

smallImg[0].onclick= function(){
    mainImg.src= smallImg[0].src;
}
smallImg[1].onclick= function(){
    mainImg.src= smallImg[1].src;
}
smallImg[2].onclick= function(){
    mainImg.src= smallImg[2].src;
}
smallImg[3].onclick= function(){
    mainImg.src= smallImg[3].src;
}
*/
//menu drop

const hamburger= document.getElementById("hamburger");
const menu= document.getElementById("menu");
hamburger.addEventListener('click', mySlide);
function mySlide(){
    menu.classList.add('slide');
    hamburger.style.visibility="hidden";
}

var close= document.getElementById("close");
close.addEventListener('click', slideOut);
function slideOut(){
    menu.classList.remove('slide');
    hamburger.style.visibility= "initial";
}

