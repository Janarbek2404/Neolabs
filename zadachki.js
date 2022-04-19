// let arr=[[1,1,1],[2,2,2],[3,3,3]]
// var maximumWealth = function(accounts) {
//     let max=0
//     for(let i=0; i<accounts.length; i++){
//         let sum=accounts[i].reduce((acc,item)=>{
//             return acc += item
//         },0)
//         if(sum>max) max=sum
//         console.log(sum)
//     }
//     console.log("==================")
//     console.log(max)

//     ///======================

//     // let maxSum=0
//     // for (let i = 0; i < accounts.length; i++) {
//     //     let array=accounts[i]
//     //     sum=0
//     //     for(let j=0;j<array; j++){
//     //         sum+=array[i]
//     //     }
//     //     sum=Math.max(maxSum, sum)
//     // }
//     // console.log(maxSum)
//     console.log(max)
// };


//////????????????????????????????????????????????
// function findOutlier(integers){
//     length=integers.length
//     for(let i=1; i<length; i++){
//         if(integers[i]%2===0){
//             if(integers.length<=1){
//                 console.log(integers[i])
//             }
//         }
//         if(integers[i]%2===1){
//             if(integers.length<=1){
//                 console.log(integers[i])
//             }
//         }
//     }
// }
// array=[2,4,6,8,5]
// findOutlier(array)

// function testUnique(A)
// {   
//     var n = A.length;
//     for (var i = 0; i < n-1; i++)
//      { for (var j = i+1; j < n; j++)
//         { if (A[ i ] === A[j]) console.log(false); }
//      }
//     console.log(true);
// }
// let array=[1,2,3,4,5,1,2,3,7]
// testUnique(array)











function text(str){
    function Polibia(a,b,c,d,e) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        console.log(e);
        let arr=str.split("")
        console.log("===========================")
        console.log(arr);

        for (let i = 0; i < str.length; i++) {
            for (let j = 0; j < 5; j++) {
                if(arr[i]===a[j]){}
                
            }
            
        }






















    }

    array1=["a","b","c","d","e"]
    array2=["f","g","h","i","k"]
    array3=["l","m","n","o","p"]
    array4=["q","r","s","t","u"]
    array5=["v","w","x","y","z"]
    Polibia(array1,array2,array3,array4,array5)
}
string="hello"
text(string)

















