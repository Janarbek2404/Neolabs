// Напишите функцию, которая принимает сообщение и показывает ее в консоль
// каждые 2 секунды в течение 30 секунд и перестает ее показывать

// Сообщение по умолчанию должно быть "Вам запрещено тут находиться"

let i=0;
const Interval=setInterval(function stop(s="Вам запрещено тут находиться"){
    console.log(s)
    i++;
    if (i>14) {
        clearInterval(Interval)
    }
},2000)






////////////////////////////////////////////
///////////код с урока

// let message = 'Уже есть сообщение'

// if(!message) {
//   message = 'Какое то сообщение'
// }

// message ||= 'Какое то сообщение' // Присваивает значение если message == false
// message &&= 'Какое то сообщение' // Присваивает значение если message == true

// let str = '12312412'

// console.log(str.replaceAll('3', 'Б')) // .replaceAll(что мы хоти поменять, на что мы хотим поменять)

// let m = 1_000_000_000_000 // _ знаки игнорируются, удобство для чтения больших чисел
// console.log(m)

// class User {}
// const arrowFunc = () => {}
// BigInt

// ES2022

// TypeScript
// CoffeScript


// const user = {
//   name: 'someName',
//   age: 99,
//   loaction: 'Kyrgyzstan',
//   email: 'someEmail@gmail.com'
// }
// const name = user.name
// const { name } = user
// console.log(name)

// function someFunc(...pirojki) {
//   console.log(pirojki)
  // for(let i = 0; i < pirojki.length; i++) {
  //   console.log(pirojki[i].replaceAll('1', 'A'))
  // }
// }
// someFunc('1', 'abc', '123', 'dgadf', 'false', '100000000', 'aaaaaaa')


// function someFunc(
//   name = 'John', 
//   age = 20, 
//   walk = function () { console.log('im walking') }
// ) { // Параметры по умолчанию
//   console.log(name)
//   walk()
// }
// someFunc()


// setTimeout(callback, timeout = ms)
// setTimeout(function() { 
//   console.log('Прошло 5 секунд')
// }, 5000)

// let i = 0
// const firstIntervalId = setInterval(function() { //
//   console.log('Прошло еще 2 секунды')
//   i++
//   if(i > 3) {
//     clearInterval(firstIntervalId) 
//     // clearInterval(айди интервала) чтобы остановаить интервал
//   }
// }, 2000)