// console.log("------welcome in js-----");
// let arr = [1,2,3,4,5,6,7, "hello",true];
// for (let i =  0; i < arr.length; i++) {
//     console.log(arr[1]);
// }

// arr.push("alok");
// console.log("..................");
// arr.pop();

//arr.splice (start, count, addon)
// arr.splice(2,1);
// let count=0;
// const newArr = [5,5,6,4,3,5,4,56,4,3]
// for (let i =0; i < arr.length; i++){
//     // console.log(arr[i]);
//     if ( newArr[i] % 2 === 0) count++;
// }
//     console.log(count);
// const newArr = [1,4,5,6,73,2,4]
// let count = 0;
// for ( let i = 0 ; i < newArr.length ; i++ ){
//     console.log(newArr[i]);
//     if (newArr[i] ===5){ 
//         newArr.splice(i, 1);
//     }
// }
// console.log(newArr);
// let sum = 0;
// for ( let i = 0 ; i < newArr.length ; i++ ){
//      if (newArr[i]%2 ===0){ 
//          sum = sum + newArr[i];
//      }
//  }
//  console.log(sum);

//  let sum = 0;
//  for ( let i = 0 ; i < newArr.length ; i++ ){
//       if (newArr[i]%2 ===1){ 
//           sum = sum + newArr[i];
//       }
//   }
//   console.log(sum);
var sum=0;
  let arr = [1,2,3,4,6,7]
  for(let i = 0 ; i < arr.length ; i++){
   var sum=arr[i]+arr[i+1];
   if(sum%2==0){
    console.log(arr[i]+1)
   }
}  


