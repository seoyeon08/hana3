
// =========== 1 ============= //

// const arr = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
// console.log(arr);

// function makeObjectFromArray(arr){
//     const resultObj = {};
//     for (let i of arr){
//         const key = i[0];               // 첫 번째 값을 key로 사용하고
//         const value = i.slice(1);       // 나머지 값을 value로 사용하자. 근데 slice를 안 쓰고 풀...어야 한다고랍시구요
//         resultObj[key] = value;            // key 값에 맞게 value를 넣어준다
//     }
//     return resultObj;                      // 완성된 object를 return
// }

// const result1 = makeObjectFromArray(arr);
// console.log(result1);

// ---------------------------------

// destructring 해야합니다.
const arr2 = [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
console.log(arr2);

function makeObjectFromArray(arr){
    const resultObj = {};
    for (let i of arr){
        if(Object.prototype.hasOwnProperty.call(arr, i)){
            const valuesObj = [i, ...arr[i]];
            resultObj.push(valuesObj);
        }
    }
    return resultObj;                      // 완성된 object를 return
}

const result11 = makeObjectFromArray(arr2);
console.log(result11);


// ============ 2 ============ //

// const obj = { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] };
// console.log(obj);

// function makeArrayFromObject() {
//     const resultArr = [];
//     for (let i in obj){
//         if(Object.prototype.hasOwnProperty.call(obj, i)){
//             const valueArray = [i, ...obj[i]];
//             resultArr.push(valueArray);
//         }
//     }
//     return resultArr;
// }

// const result2 = makeArrayFromObject(obj);
// console.log(result2);