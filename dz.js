// function sqr(x,y) {
//     console.log(Math.sqrt(x,y))
// }
// sqr(16,2)


// let aww=[]    
// for (let i = -10; i < 10+1; i++) {
//     aww.push(i)
// }
// aww.splice(1,5,222)
// console.log(aww)




// for (let i = 0; i < 16; i++) {
//     mat.push(i)
// }
// console.log(mat);
// // =====================================================
function array(mat){ 
    let arr=mat.split("")

    let arr1 = arr.slice(0,4)
    console.log(arr1)
    let arr2 = arr.slice(4,8)
    console.log(arr2)
    let arr3 = arr.slice(8,12)
    console.log(arr3)
    let arr4 = arr.slice(12,16)
    console.log(arr4)
    console.log("======================")

    let matrix1= arr.slice(3,7)
    console.log(matrix1)

    let matrix2= arr.slice(13,15)
    matrix2.unshift(arr[2])
    matrix2.push(arr[15])
    console.log(matrix2)

    let matrix3=arr.slice(1,2)
    matrix3.push(arr[12],arr[15],arr[8])
    console.log(matrix3)


    let matrix4=arr.slice(0,1)
    matrix4.push(arr[11],arr[10],arr[9])
    console.log(matrix4)

}
array("hellomynameisJon")






// // Вы спрашиваете маленькую девочку: «Сколько тебе лет?» Она всегда говорит «x лет», где x — случайное число от 0 до 9.

// // Напишите программу, которая возвращает возраст девочки (0-9) в виде целого числа.

// // Предположим, что тестовая входная строка всегда является допустимой строкой. Например, тестовый ввод может быть «1 год» или «5 лет». Первым символом в строке всегда является число.
// function getAge(inputString){
//     if(inputString>0 || inputString<=9){
//       console.log(inputString+" Лет")
//       return (inputString+" Лет");
//     }
//     }
//     getAge(5);



// // Завершите решение так, чтобы оно разбило строку на пары из двух символов. Если строка содержит нечетное количество символов, то отсутствующий второй символ последней пары должен быть заменен символом подчеркивания ('_').

// // Примеры:

// // * 'abc' =>  ['ab', 'c_']
// // * 'abcdef' => ['ab', 'cd', 'ef']

// function solution(str){
//     str=str.split("")
//     console.log(str)
//   }
//   solution("abcde")

/// =======================================
// function array(arr) {
//     let length=arr.length
//     for(let i=0; i<length; i++){
//         arr.push(arr[i])
//     }
//     console.log(arr)
// }
// let ar=["1","2","3"]
// array(ar)/// ответ: [ '1', '2', '3', '1', '2', '3' ]