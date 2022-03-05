let cursor = document.getElementById('cursor')
let header = document.getElementById('header')
let mailme = document.getElementById('mailme')
let number = 1
let oldX = 0
document.onmousemove = function (e) {
    cursor.style.left = (e.pageX - 25) + "px"
    cursor.style.top = (e.pageY - 25) + "px"
    cursor.style.height = "50px"
    cursor.style.width = "50px"
    cursor.style.display = "block"
    console.log('e.pageX', e.pageX);
    if(oldX<e.pageX) cursor.style.transform= "scaleX(1)"
    else cursor.style.transform= "scaleX(-1)"
    if (e.pageY <= 60) {
        // cursor.style.display ="none"
        cursor.style.left = (e.pageX-10) + "px"
        cursor.style.top = (e.pageY-20) + "px"
        // cursor.style.backgroundImage = "linear-gradient(yellow, #c4a300)";
        cursor.style.transitionDuration = "0.5s";
        cursor.style.height = "20px"
        cursor.style.width = "20px"
        cursor.style.transitionTimingFunctio = "ease-out";
    } else {
        // cursor.style.left = (e.pageX-60) + "px"
        cursor.style.top = (e.pageY-50) + "px"
        // cursor.style.backgroundImage = "none";
        cursor.style.transitionDuration = "0.5s";
        cursor.style.transitionTimingFunctio = "ease-in";
    }
    oldX = e.pageX
}