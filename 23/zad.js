// var busyStudent = function(startTime, endTime, queryTime) {
//     length=startTime.length
//     num=0
//     for (let i = 0; i < length; i++) {
//         if ( startTime[i]<=queryTime && endTime[i]>=queryTime ) {
//             num++
//         }
//         // console.log(i)
        
//     }
//     return num;
// };
// let a = [1,2,3];
// let b = [3,2,7];
// let c = 4;

// busyStudent (a,b,c);

let numOfEvenNumbers = 0
for(let i=0; i<numOfEvenNumbers.length; i++){
    let cur= String(nums[i])
    if(cur.length%2===0) numOfEvenNumbers++
}
return numOfEvenNumbers;