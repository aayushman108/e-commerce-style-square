var bgImage= document.querySelector(".bgImage");
var bgImageHeight= bgImage.clientHeight;
console.log(bgImageHeight);
window.addEventListener("resize", function(){
    bgImageHeight= bgImage.clientHeight;
})
console.log(bgImageHeight);