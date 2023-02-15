var mainImg= document.getElementById("mainImg");
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

//menu drop
//var hamburger= document.querySelector("#hamburger");
//var dropMenu= document.querySelector("#menu");
document.querySelector("#hamburger").addEventListener('click', myDropDown);
function myDropDown(){
    document.querySelector("#menu").style.marginTop= "-25px";
    document.querySelector("#hamburger").style.display= "none";
}


