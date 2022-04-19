/////////////// map, for, filter(), find() 

/////////     MAP    ////////
// const abc=["a","b","c","d","e"]

// const modifiedAbc=abc.map((item)=>{ ////копирует abc и модифицирует modifiedAbc
//     return {value: item/* это номер массива */}
// })

// console.log(modifiedAbc)


/////      reduce       ////
// let arr=["23","56","11","99"]

// let total=arr.reduce((tot/**итог */, item/** массив */)=>{
//     return tot+item;
// },""/*по умлочанию строка"" можно и объект{}*/)
// console.log(total)//////23561199


////////  ...arr

// let arr=["2","3","4","6"]

// let array=[ "9","0",...arr/** Вызывает Добовляет arr */,"0"]

// console.log(array)


////////    ...result

// const users=[
//     {id: "1", name: "John" },
//     {id: "2", name: "Anna" },
//     {id: "3", name: "Kate" },
// ]

// const userNameById=users.reduce(function (result,user) {
//     return {
//         ...result,///// переписывает users
//         [user.id]: user.name,/// [ключ=user.id]: значение= user.name
//     }
// }, {})

// console.log(userNameById)

/////////////////////////         ***********************************************
// function num(number) {
//     let str=String(number)
//     let reversedStr=str.split("").reverse().join("")
// //   // let reversedStr=""
// //   // for (let i = str.length-1; i >=0; i--){
// //       // reversedStr+=number[i]
// //   // }
// //   // if(str===reversedStr){
// //       // console.log(true)
// //   // }
// //   // else{
// //       // return false
// //   // }
// }
// num(1223)

////////////////////////////////////////////////////////

// var pluseOne = function(digits){
//     let joinedNum = digits.join('')
//     let num = BigInt(joinedNum)
//     return String(++num).split('')
// };



////////////// 111111111   /////
// function number(num) {
//     let str=num.join("")
//     console.log(str)
//     let num1=Number(str)+1
//     let array=[]
//     array.push(num1)
//     array=(""+array).split("")
//     console.log(array)
// }
// arr=[9,9,55]
// number(arr)



//////////////  2222222 ///////

// var lengthOfLastWord = function(s) {
//     s.witheWee
// };
// lengthOfLastWord("Hello World")

///////////   3333333  //////
// var runningSum = function(nums) {
//     let length=nums.length
//     console.log(nums)
//     for (let i = 0; i < length; i++) {
    
//     }
// };
// arr=[1,2,3,4,5]
// runningSum(arr)

//////////// 55555555555555555//////////

// var arrayStringsAreEqual = function(word1, word2) {
//     word1=word1.join("")
//     word2=word2.join("")
//     if(word1===word2){
//         console.log(true)
//         return true;
//     }
//     else{
//         console.log(false)
//         return false;
//     }
// };
// arr=["abcb","1c"]
// arr2=["ab","cb1c"]
// arrayStringsAreEqual(arr,arr2)


////////////////6666666666666666////////////
// var singleNumber = function(nums) {
//     let length=nums.length
//     for(let i=0;i<length;i++){
//         if(nums[i]===nums[i++]){// ишет дубликатов
//             console.log(nums[i])
//         }
//         else{
//             console.log(nums[i])
//         }
//     }
// };
// let array=[1,1,3,4, 7,4, 7]
// singleNumber(array)


//////////// 777777777777777//////////
// var containsDuplicate = function(nums) {
//     let length=nums.length
//     for(let i=0; i<=length; i++){
//         if(nums[i+1]===nums[i]) {
//             console.log(true)
//             return true;
//         }
//         else {
//             console.log(false)
//         return false;
//         }
//     }
// };
// let arr=[1, 2,3, 1]
// containsDuplicate(arr)



///////////////888888888888888888888888888888888888//////////
// var containsDuplicate = function(nums) {
//     nums.sort();
//      for (let i = 0; i < nums.length - 1; i++) {
//          if (nums[i] === nums[i + 1]) {
//              return true;
//          }
//      }
//      return false;
//  };




//////////////110100101010101011001
// var restoreString = function(s, indices) {
//     let array=new Array(indices.length)// создает массив с количеством indices.length
//     for(let i=0; i<indices.length; i++){// проходимся по массиву
//         let index=indices[i]// текущий индекс
//         array[index]= s[i]
//     }
//     return array.join("")
// };
// array=[4,5,6,7,0,2,1,3]
// str="codeleet"
// restoreString(str,array)


////////////////////////////////////////////////////////////////
/////////////коды с урока
// this
// for loop

// var getConcatenation = function (nums) {
//     const ans = [1, 3, 5, 1, 3, 5];
//     for (i = 0;i < nums.length; i++) {
//         ans[i] = nums[i];
//         ans[i + nums.length] = nums[i];
//     }
//     console.log(ans);
// };
// getConcatenation([1, 3, 5])

// const abc = ['a', 'b', 'c', 'd', 'e']

// const modifiedAbc = abc.map((item) => {
//     return { value: item }
// })

// let modifiedAbc = []
// abc.forEach((item) => {
//     modifiedAbc.push(item + ' 1')
// })
// console.log(modifiedAbc)

// let arr = ['23', '56', '11', '99', '1215161']

// let total = arr.reduce((tot, item) => {
//     return '235611991215161'
// }, '')

// let user = {
//     id: '123',
//     name: 'Manas'
// // }
// let id = '123'
// let name1 = 'Manas'

// let obj = {
//     name1: id
// }

// let copyObj = {
//     ...obj,
//     age: 99,
// }

// let arr = [1,2,3]
// let copyArr = [0, 1, ...arr, 5]

// console.log(copyObj)
// console.log(copyArr)

// const users = [
//     { id: "1", name: "John" },
//     { id: "2", name: "Anna" },
//     { id: "3", name: "Kate" },
// ]

// const usernamesById = users.reduce(function (result, user) {
//     return {
//         ...result,
//         [user.id]: user.name, // [ключ = user.id]: значение = user.name
//     }
// }, {})

// console.log(usernamesById)
  // { '1': 'John', '2': 'Anna', '3': 'Kate' }


  // ['1', '3', '2', '1']
  const number = 1231
  
  const stringNumber = String(number) // 1231 ->"1231"
  const stringNumber2 = number + '' // 1231 ->"1231"
  
  const numberString = Number(stringNumber) // "1231" -> 1231
  const numberString2 = +stringNumber // "1231" -> 1231
  
  String(number).split('').reverse()
  
let arr = ['1', '2', '3', '1']
// reverse loop
for(let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i])
}

'abcdefg' === 'gfedcba'