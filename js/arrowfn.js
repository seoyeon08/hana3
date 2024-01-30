function f(a){
    return a ** 2;
}

const af = a => a ** 2;

console.log(f(3));
console.log(af(3));

function f2(a){
    const c = a ** 2;
    return Math.sqrt(c);
}

const af2 = (a, b) => {
    const c = a ** 2;
    return Math.sqrt(c);
};

console.log(f2(3, 4));
console.log(af2(3, 4))

function fff_org(a){
    return function (b) {
        for (let i = 1; i < 10; i += 1) console.log(`${a} x ${1} = ${a * i}`);
    };
}

function fff(a){
    return function (b){
        for (let i = 1; i < 10; i += 1) console.log(`${a} * ${a * i}`);
    };
}

const fff = a => b => {
    for (let i = 1; i < 10; i += 1){
        console.log(`${a} * ${1} = ${a * i}`)};
}

// a가 받는 함수가 b를 받는 함수를 return 하고 있다.


// --------------------------------------------- //
globalThis.y = 10;
function bfn(x){
    console.log(x, this.y);
}
//bfn은 x라는 값을 받아서
const bfn = x => console.log(x, this.y);

bfn(9);
bfn.bind({y: 999})(7);