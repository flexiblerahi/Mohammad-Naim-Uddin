let cursor = document.getElementById('cursor')
let header = document.getElementById('header')
let mailme = document.getElementById('mailme')
let number = 1
document.onmousemove = function (e) {
    console.log('screen.width', screen.width)
    cursor.style.left = (e.pageX - 25) + "px"
    cursor.style.top = (e.pageY - 25) + "px"
    cursor.style.height = "50px"
    cursor.style.width = "50px"
    cursor.style.display = "block"

    if (e.pageY <= 60) {
        cursor.style.display ="none"
        cursor.style.left = (e.pageX-10) + "px"
        cursor.style.top = (e.pageY-20) + "px"
        cursor.style.backgroundImage = "linear-gradient(yellow, #c4a300)";
        background: ;
        cursor.style.transitionDuration = "0.5s";
        cursor.style.height = "20px"
        cursor.style.width = "20px"
        cursor.style.border = "0px"
        cursor.style.transitionTimingFunctio = "ease-out";
    } else {
        // cursor.style.left = (e.pageX-60) + "px"
        cursor.style.top = (e.pageY-50) + "px"
        cursor.style.backgroundImage = "none";
        cursor.style.transitionDuration = "0.5s";
        cursor.style.transitionTimingFunctio = "ease-in";
        cursor.style.border= "3px solid #e7c82f";
    }

}