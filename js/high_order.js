const f1 = function(f, val){
    return f(val); // fx1(2)
    // fx1(2)
};

f1(console.log, 'abc');

function fx1(a) {
    return a ** 2;
}

console.log('::>>', f1(fx1, 2));

const f2 = function(f){
    return function(... args){
        return f(...args);
    }
};

const ff2 = (f) => (...args) => {
    return f(...args);
}


const x = f2(Math.max())
const result = x(1, 3, 4, 5, 2);
console.log('result', result);

//=========================================
const arr = ['1', '2','3'];
// 이렇게 선언해도 똑같다. const arr = new Array();

// map(function(item, idx){})
// function parseInt(str) => number
const rets = arr.map(parseInt);

//Array.prototype.mapX = function(f){    // map 함수를 직접 구현한 부분!!
    //const result = [];
    //for (let i = 0; i < this.length; i += 1){
        // result.push(f(this[i], i, this));  // map은 인자 3개 전달해줘야 함.
    // }
    //return result;
//}const rets = arr.mapX(parseInt);

//arr.map(function (item, idx, this))

//parseInt('1', 0, '1', '2', '3'])
//parseInt('2', 1, '1', '2', '3'])
//parseInt('3', 2, '1', '2', '3'])
console.log(rets);  // [1, NaN, NaN]

const ret2_org = arr.mapX(function (item){
    return parseInt(item);
});
const cb = item => parseInt(item);
const ret2 = arr.mapX(cb);
console.log('ret2: ', ret2);

const unary_org = function(fn){
    if(fn.length === 1) return fn;
    return function(arg){
        return fn(arg);
    };
};

//function(arg) {return fn(arg)}
const unary = fn => (fn.length === 1 ? fn : arg => fn(arg));
const unaryCb = unary(cb);
console.log('ret3:', arr.mapX(unaryCb));
const unaryParseInt = unary(parseInt);
console.log('ret4:', arr.mapX(unaryParseInt));
console.log('ret5', arr.mapX(unary(parseInt)));