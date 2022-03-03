// collect all the divs
var divs = document.getElementsByTagName('h1');
// get window width and height
let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

let laravel = document.getElementById('laravel')
let js = document.getElementById('js')
let python = document.getElementById('python')
let react = document.getElementById('react')
let intertia = document.getElementById('intertia')
let webscraping = document.getElementById('webscraping')
let sql = document.getElementById('sql')
let nonsql = document.getElementById('nonsql')


if(winWidth<800) {
    document.getElementById('codelng').style.display = 'none'
}
else if(winWidth>2000) {
    laravel.style.top = (winHeight-525) + 'px'
    laravel.style.left = (winWidth-800) + 'px'
    laravel.style.fontSize = '120px'
    
    
    react.style.top = (winHeight-420) + 'px'
    react.style.left = (winWidth-1050) + 'px'
    react.style.fontSize = '60px'
    
    python.style.top = (winHeight-871) + 'px'
    python.style.left = (winWidth-1966) + 'px'
    python.style.fontSize = '170px'
    
    php.style.top = (winHeight-550) + 'px'
    php.style.left = (winWidth-980) + 'px'
    php.style.fontSize = '50px'
    
    js.style.top = (winHeight-390) + 'px'
    js.style.left = (winWidth-1250) + 'px'
    js.style.fontSize = '80px'
    
    intertia.style.top = (winHeight-860) + 'px'
    intertia.style.left = (winWidth-400) + 'px'
    intertia.style.fontSize = '55px'
    
    webscraping.style.top = (winHeight-790) + 'px'
    webscraping.style.left = (winWidth-1200) + 'px'
    webscraping.style.fontSize = '120px'

    sql.style.top = (winHeight-260) + 'px'
    sql.style.left = (winWidth-1100) + 'px'
    sql.style.fontSize = '80px'
    
    nonsql.style.top = (winHeight-260) + 'px'
    nonsql.style.left = (winWidth-700) + 'px'
    nonsql.style.fontSize = '80px'
}
else {

    php.style.top = (winHeight-475) + 'px'
    php.style.left = (winWidth-735) + 'px'
    php.style.fontSize = '100px'
    
    
    react.style.top = (winHeight-400) + 'px'
    react.style.left = (winWidth-450) + 'px'
    react.style.fontSize = '40px'
    
    python.style.top = (winHeight-121) + 'px'
    python.style.left = (winWidth-696) + 'px'
    python.style.fontSize = '70px'
    
    laravel.style.top = (winHeight-495) + 'px'
    laravel.style.left = (winWidth-525) + 'px'
    laravel.style.fontSize = '50px'
    
    js.style.top = (winHeight-380) + 'px'
    js.style.left = (winWidth-530) + 'px'
    js.style.fontSize = '60px'
    
    intertia.style.top = (winHeight-435) + 'px'
    intertia.style.left = (winWidth-300) + 'px'
    intertia.style.fontSize = '35px'
    
    webscraping.style.top = (winHeight-130) + 'px'
    webscraping.style.left = (winWidth-400) + 'px'
    webscraping.style.fontSize = '30px'

    sql.style.top = (winHeight-195) + 'px'
    sql.style.left = (winWidth-810) + 'px'
    sql.style.fontSize = '50px'
    
    nonsql.style.top = (winHeight-260) + 'px'
    nonsql.style.left = (winWidth-700) + 'px'
    nonsql.style.fontSize = '80px'
    
}
// console.log(randomTop, randomLeft)
// 65.15799134498951 800.5905590152419 
// 163.82531516644744 959.5840731003716 
// 171.38945340160194 666.0037518709064 
// 250.63022218432442 625.2442529923431 
// 31.754204427885725 703.8216250564278

// winHeight: 342, winWidth:1366 
// console.log(randomTop, randomLeft)
// 318.3843981354178 1340.5093837447428 
// 281.1283799259832 1221.4058879521203 
// 99.00083934444869 1345.0014452661867 
// 271.9276845459705 905.8636316958716 
// 189.7071711685353 1072.759709861628