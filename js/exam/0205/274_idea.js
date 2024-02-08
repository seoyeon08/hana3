function promi(){
    return fetch;
}

//fetch
const promi = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log('in-timer', pid);
        resolve(pid);
    }, 1000);
});

const posts = [{id: 1}, {id: 2}, {id: 3}];

function f1(pid){
    // return promi(pid).then(r => {console.log('r=', r);
    return r.pid;
};
function f2(pid){
    // const obj = await promi(pid);
    return obj.pid;
}

const x = await f1(100);
console.log('x:', x)
const [x1, x2] = await Promise.all([f1(100), f1(200)]);
// const results = await Promise.all(post.map(post => f1(post)));
console.log('results:', results);