// const h1=document.querySelector('h1')
// console.log(h1)

// h1.innerHTML="Hello World"

// h1.style.backgroundColor= "grey"  /* Можно #fff, rgba(200,200,200) */


// let isHelloWold=false

// h1.addEventListener('click',()=>{
//     setTimeout(()=>{
//         if(isHelloWold){
//             h1.innerHTML="Hello World"
//             h1.style.transition="all 1s ease"
//             h1.style.color = "blue"
//             h1.style.backgroundColor="red"

//         }else{
//             h1.innerHTML="JavaScript 1"
//             h1.style.transition="all 1s ease"
//             h1.style.color="red"
//             h1.style.backgroundColor="blue"
//         }

//         isHelloWold=!isHelloWold
//     },2000)
// })



const start=document.querySelector("#start")
const value=document.querySelector("#value")
const pause=document.querySelector("#pause")

let counter=0
let isPauser=true

if(isPauser){
    setInterval(()=>{
        counter++
        value.innerHTML=counter
    },1000)
}
    

start.addEventListener('click',()=>{
    isPauser=false
})

pause.addEventListener('click',()=>{
    isPauser=true
})

value.innerHTML=counter






















