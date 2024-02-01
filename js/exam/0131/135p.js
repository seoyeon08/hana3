// const arr = [1, 2, 3, 4, 5];
// cf. arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
// ⇒⇒⇒ 결과 => [ 1, 8, 27, 64, 125 ]

// (a) => 
// const ret = arr.map(a => a ** 2).map(a => Math.sqrt(a)).map(a => a ** 3);
// console.log('ret : ', ret);
//[square, sqrt, cube]
//[cube, square, sqrt]

// ------------------------------------

const arr = [1, 2, 3, 4, 5];
const square = n => n ** 2;
const cube = n => n ** 3;


const ret = arr
.map(square)
.map(Math.sqrt)
.map(cube);

console.log(ret);
asserts.deepStrictEqual(ret, [1, 8, 27, 64, 125]);

// square(2) => Math.sqrt(4) => cube(2)
const ret3_2 = [square, Math.sqrt, cube]
.reduce((acc, f) => f(acc), 2);
const bp1 = (n) => [square, Math.sqrt, cube].reduce((acc, f) => f(acc), n);
console.log('ret3_2', ret3_2, bp1(2));

// const ret3_3 = arr.map(a => bp1(a));
const ret3_3 = arr.map(a => bp1(a)); // 수행한 결과를 다시 받아야 하니까 map을 사용한다. == .map(bp1)
console.log('ret3_3', ret3_3);
arrert.deepStrictEqual(ret3_3, [1, 8, 27, 64, 125]);

// 범용 bpm
const bpm = (fns, n) => fns.reduce((acc, f) => f(acc), n);
const ret3_4 = bpm([square, Math.sqrt, cube], 2);
console.log('ret3_4', ret3_4);