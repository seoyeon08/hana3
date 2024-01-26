
// 4
// const arr = [[{id: 1}], [{id:2}, {id: 3}]]
// // cf. const id1 = arr[0][0].id;
// const arr1 = i => i.map(arr => arr.id);

// const [id1, id2, id3] = arr.map(arr1);
// console.log(id1, id2, id3); 
// // 출력결과: 1 2 3




///// answer /////

const arr = [[{id: 1}], [{id:2}, {id: 3}]]
const [[{id:id1}], [{id:id2}, {id:id3}]] = arr;
console.log(id1, id2, id3)