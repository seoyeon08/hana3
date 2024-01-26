// const suer = {id:1, name: 'P', age:33}
// const {name:n, age = 30} = {name: 'Lee'};  // n = ?, age = ?
// const fn = ({age}) => age;  // user = {id: 1, name: 'P', age: 33}
// const {age2:age3 = fn(user)} = {age22: 20};  // age2 = 30, age3 = 33
// // const {age} = {id:1, name: 'P', age:}
// // function fn({age }) { return age; }

// class Dog{}
// const lucy = new Dog();

// function f(a, b, ...c){
//     console.log('a:', [...arguments]);
//     console.log('c:', c);
//     for (const x of c){
//         console.log('ccc>>>', x)
//     }
// }
// (1,2,3,4)

// const arr = [1, 2, 3, 4, 5, 6, 7];
// for(let i of arr){
//     if(i < 5){

//     }
// }

const {name:n, age = 30} = {name: 'Lee'};
// console.log(n, age)     //n = Lee, age = 30
const {age2 = 30} = {name: 'Park', age2: 20};
// console.log(age2);      //age2 = 20
function fn({age }) { return age; }
user = {id: 1, name: 'P', age: 33}
const {age2:age3 = fn(user)} = {age22: 20};
console.log(age2, age3)     //age2 = 20, age3 = 33