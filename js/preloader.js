let loader = document.getElementById('preloader')
let heading = document.getElementById('heading')
console.log('heading', heading)
heading.style.display = 'none'
window.addEventListener('load', function () {
    loader.style.display = 'none'
    heading.style.display = ''
}) 

