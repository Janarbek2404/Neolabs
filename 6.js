// let user={
//     age: this.age,
//     name:"some name",
//     username:"sosoosooos",
//     walk:()=>{/// this //не может увидеть из за стрелочных функции
//         console.log(this.name)
//     },
//     sayName: function() {// this
//         console.log(this.name)
//     },

//     slll: function() {
//         this.age=288/// можно использовать вот так 
//         console.log(this.age)
//     }
// }
// user.slll()
// user.walk()
// user.sayName()



let nums=[1, 5, -8, 13, 0, 111, -88, -1]


// let evenOnly/*сам массив */=nums.filter(function (n/* число в нутри массива*/) {
//     return n>0;
// })

// console.log(evenOnly))




// const lenguages=["Java","C#","JavaScript"]

// const jlenguages=lenguages.filter/*Фильтрует*/(function (lenguages){
//     return lenguages./*-->*/startsWith("J")/// возврошает массив с начальной буквы  "J"
// })
// console.log(jlenguages)

// let nums=[2,3,4,65]

// let sum2=nums.reduce((sum,item) => {
//     return sum+item
// },0)
// console.log(sum2)//// сумма массива

let abc=["b","e","c","a","d"]

// console.log(abc.join/* склеивает и подстовляет "5"*/("5"))
// console.log(abc.includes/*проверяет есть-ли в массиве "а"*/("a"))
// abc.sort()// сортирует по алфавиту по строке  

// nums.sort((a,b)=>{ ///сортирует число по возростанию
//     return a-b; // return b-a сортирует по убыванию ////  
// })
// console.log(nums)













