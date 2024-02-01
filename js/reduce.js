const objs = [ {id: 1}, {name: 'Hong'}, {addr: 'Seoul', id: 5}];

// const resultObject = objs.reduce((result, obj) => {
//     Object.assign(result, obj);
//     return result;
//   }, {});

const result = objs.reduce((result, obj) =>{
    return {...result, ...obj};
})
console.log(result)

// obj.assign 말고 ...(spread 연산자 쓰삼)
// {id: 5, name: 'Hong', addr: 'Seoul'}

// ================ answer ================== //
const f = obj.reduce((acc, item) => ({...acc, ...item}), {});
console.log('obj: ', f);
// 검증
asserts.deepStrictEqual(obj, {id: 5, name: 'Hong', addr: 'Seoul'})