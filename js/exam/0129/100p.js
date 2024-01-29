// const arr = [100, 200, 300, 400, 500, 600, 700];

// // 1번
// for (let i in arr){
//     console.log(i);
// }

// // 2번
// for (let i of arr){
//     console.log(i);
// }

// =====================================================
const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };

// //3번
// for (let i in obj){
//     console.log(i);
// }

// //4번
// for (let i in obj){
//     console.log(obj[i])
// }

//5번
// for (let i in obj){
//     console.log(obj[i]);
// }

// //6번
// Object.defineProperty(obj, 'level', {
//     enumerable: false
// });
// for (let i in obj){
//     console.log(obj[i]);
// }


//7번
// Object.freeze('role');