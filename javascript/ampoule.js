
function changeState(){
    let ampoule = document.getElementById("myImage");
    if(ampoule.src.includes("pic_bulboff.gif")){
        ampoule.src = "images/pic_bulbon.gif";
    }
    else{
        ampoule.src = "images/pic_bulboff.gif";
    }
}