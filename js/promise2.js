// import {rand} from './utils/index.js';
// const randTime = new Promise((resolve, reject) => {
//     const sec = rand(1, 4) * 500;
//     setTimeout(() => resolve(sec), sec);
// });

// randTime.then(x => console.log('sec>>', x, 'ms'));

sampleUrl = ``
// ---------------------------------------

const promiFetch = (url) => new Promise
((resolve, reject) => {
    
});
const asyncFetch = async (url) => {};
const fn = promiFetch;

// const fn = asyncFetch

const data = await promiFetch(sampleUrl);
console.log('data : ', data);