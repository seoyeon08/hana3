// const promiFetch = url => new Promise((resolve, reject) => {
//     fetch(url)
//     .then(res => res.json())
//     .then(resolve);
//     // .then(data) => resolve(data);
// });

// const asyncFetch = async url => {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// };

// // 대체해서 결국은 둘이 똑같다.
// const data = await promiFetch(sampleUrl);
// console.log('data: ', data);

// const data2 = await asyncFetch(sampleUrl);
// console.log('data2: ', data2);

// const rets = [sampleUrl, sampleUrl2].map(async url => {
//     const res = await fetch(url);
//     const data = await res.json();
//     return data;
// });

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

const f = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.comusers/1');

    if(!res.ok) throw new Error("Failt to Fetch");

    // 2초 sleep하도록 이 부분을 작성해보세요
    await new Promise (resolve => setTimeout(resolve, 2000));
    // then을 await으로 표현했다. 
    const data = await res.json();
    return data.name;
};
// const executeAsyncFunction = async () => {
//     try {
//       const result = await f();
//       console.log(result);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   executeAsyncFunction();

console.log(await f());