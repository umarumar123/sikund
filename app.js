// function start() {
//     const date = new Date()
//     const time = date.getHours()
//     const minute = date.getMinutes()
//     const second = date.getSeconds()

//     setInterval(() => {
//         start()
//     }, 1000);
// }


var minutes = document.querySelector('.minutes')
var seconds = document.querySelector('.seconds')
var start = document.querySelector('.toggle')
var reset = document.querySelector('.reset')
let chek = 0;
let s = 0
let m = 0

start.addEventListener('click',function () {
    chek++
    if (chek==1) {
        secMur()
        start.style.background = `red`
    }

    if (chek==3) {
        seconds.innerHTML='00';
        chek=0
        m = 0
        s = 0
        start.style.background = `green`
        minutes.innerHTML='00 :' ;
    }
    
    console.log(chek);
})
function secMur() {
s++
if (s<=9) {
    seconds.innerHTML = '0' + s
}else if (s>=9) {
    seconds.innerHTML = s
}




    if (chek==1) {
        setTimeout(() => {
            secMur()
        },1000);
      
    }
    if (s==59) {
        m++
        s = 0
     
        if (m<=9) {
            minutes.innerHTML = '0' + m + ':'


        }else if (m>=9) {
            minutes.innerHTML = m + ':'
        }

      
    }
   
    
    
}