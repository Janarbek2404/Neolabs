// let userInfo={
//     name: "Vasia",
//     age: 30,
// };
// console.log(userInfo)
// console.log(userInfo.age)


////////////////////////////////


// function userInfo(name,age){
//     return{
//         name: name,
//         age: age,
//     }
// }
// let user=userInfo("Joni",19)
// console.log(user)


let userInfo={
    name: "Jon"
}
console.log(userInfo)

userInfo.age=19
console.log(userInfo)

userInfo.address={
    city: "Karakol",
    street: "lenina"
}
console.log(userInfo)

delete userInfo.age
console.log(userInfo);