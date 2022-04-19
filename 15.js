// // const wait=(seconds)=>{
// //     return new Promise((res)=>{
// //         setTimeout(()=>{
// //             res("kakoe to vremia")
// //         },seconds*1000)
// //     })
// // }

// // async function someAsyncFunction(){
// //     console.log("Nachalo Ojidanie")
// //     const res= await wait(3)   /////////  await пишется до функции которую должны
// //     ///  ожидание 3 секундыб ничего не выполняется
// //     ///  Через 3 секунды выполняется следующий код

// //     // await работает только с промисоми
// //     // три точки под await  означает что никакого эффекта она не даст 
// //     await setTimeout(()=>{},1000)
// //     console.log("Proshlo kakoe to vremia i my polychili soobshenie: "+res);
// // }

// // someAsyncFunction()


// const wait=(operation)=>{
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(operation)
//         },3000)
//     })
// }

// const getSomeCalculation = async ()=>{
//     console.log("Просто сообщение которое озночаает что функция началась")
//     let fortyFive=45
//     console.log("Второе сообщение ");
//     let getSomeCalculation=fortyFive+100
//     console.log("Мы получили " +getSomeCalculation);
//     const result = await/** ждет ответа */ wait(155+getSomeCalculation)  // типо очень сложная операция занимает 3 секунды
//     console.log("Наше вычисление = "+result);
// }

// getSomeCalculation()