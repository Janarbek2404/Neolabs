

// function str(a,b) {
//     // if (a.length<b.length) {
//     //     console.log(a+b+a)
//     // }
//     // else{
//     //     console.log(b+a+b)
//     // }
// }

// str(["22"],["1"])





// ================================
// 111111111111111111111111111111111

// function year(y) {
//     if(y>0){
//         if(y===1){
//             console.log(15)
//         }
//         else if (y===2) {
//             console.log(15+9)
//         }
//         else if(y>2){
//             let s=0
//             for (let i = 2; i < y; i++) {
//                 s=s+4
//             }
//             let t=15+9
//             console.log(t+s);
//         }
//     }
//     else {console.log("Ещё не родился")}
// }
// year(6)


// =============================
// 2222222222222222222
// function test(a,b) {
//     length=a.length
//     let sum=a.reduce((i,j) => i+j,0)
//     let sec=sum/length
//     if (sec<=b) {
//         return true;
//     }
//     return false
// }
// console.log(test([2, 3, 5 ,5 ,5 ], 3))



// =============================
// 3333333333333333333333333
function sameCase(a, b){
    if(a.toUpperCase()===a && b.toUpperCase()===b || a.toLowerCase()===a && b.toLowerCase()===b){
        return 1;
    }
    else if(!/[A-Za-z]/g.test(a) || !/[A-Za-z]/g.test(b)) {
        return -1;
    }
    else return 0;
}
sameCase("r","R")

// ===========================
// 44444444444444444444444444444


// function str(a,b){
//     let max=0
//     let min=0
//     if(a.length>b.length) max=a
//     else max=b
//     if(a.length<b.length) min=a
//     else min=b
//     console.log(min+max+min)
// }
// str("2","111")




