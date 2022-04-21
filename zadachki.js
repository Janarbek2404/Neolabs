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
            if(arr[0]===a[i]){
                console.log(arr[0]=b[i])
            }
            else if(arr[0]===b[i]){
                console.log(arr[0]=c[i])
            }
            else if(arr[0]===c[i]){
                console.log(arr[0]=d[i])
            }
            else if(arr[0]===d[i]){
                console.log(arr[0]=e[i])
            }
            else if(arr[0]===e[i]){
                console.log(arr[0]=a[i])
            }
        }
        for (let j = 0; j < str.length; j++) {
            if(arr[1]===a[j]){
                console.log(arr[1]=b[j])
            }
            else if(arr[1]===b[j]){
                console.log(arr[1]=c[j])
            }
            else if(arr[1]===c[j]){
                console.log(arr[1]=d[j])
            }
            else if(arr[1]===d[j]){
                console.log(arr[1]=e[j])
            }
            else if(arr[1]===e[j]){
                console.log(arr[1]=a[j])
            }
        }
        for (let q = 0; q < str.length; q++) {
            if(arr[2]===a[q]){
                console.log(arr[2]=b[q])
            }
            else if(arr[2]===b[q]){
                console.log(arr[2]=c[q])
            }
            else if(arr[2]===c[q]){
                console.log(arr[2]=d[q])
            }
            else if(arr[2]===d[q]){
                console.log(arr[2]=e[q])
            }
            else if(arr[2]===e[q]){
                console.log(arr[2]=a[q])
            }
        }
        for (let l = 0; l < str.length; l++) {
            if(arr[3]===a[l]){
                console.log(arr[3]=b[l])
            }
            else if(arr[3]===b[l]){
                console.log(arr[3]=c[l])
            }
            else if(arr[3]===c[l]){
                console.log(arr[3]=d[l])
            }
            else if(arr[3]===d[l]){
                console.log(arr[3]=e[l])
            }
            else if(arr[3]===e[l]){
                console.log(arr[3]=a[l])
            }
        }
        for (let p = 0; p < str.length; p++) {
            if(arr[4]===a[p]){
                console.log(arr[4]=b[p])
            }
            else if(arr[4]===b[p]){
                console.log(arr[4]=c[p])
            }
            else if(arr[4]===c[p]){
                console.log(arr[4]=d[p])
            }
            else if(arr[4]===d[p]){
                console.log(arr[4]=e[p])
            }
            else if(arr[4]===e[p]){
                console.log(arr[4]=a[p])
            }
        }
        for (let k = 0; k < str.length; k++) {
            if(arr[5]===a[k]){
                console.log(arr[5]=b[k])
            }
            else if(arr[5]===b[k]){
                console.log(arr[5]=c[k])
            }
            else if(arr[5]===c[k]){
                console.log(arr[5]=d[k])
            }
            else if(arr[5]===d[k]){
                console.log(arr[5]=e[k])
            }
            else if(arr[5]===e[k]){
                console.log(arr[5]=a[k])
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

















