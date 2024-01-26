// 2 . 내코드..

function addPoints(a, b){
    const len = a.toString().length > b.toString().length ? a.toString().length-2 : b.toString().length-2;
    const sum = (a + b).toFixed(len)
    console.log(sum)
}
addPoints(0.21354, 0.1)   // 0.31354
addPoints(0.14, 0.28)     // 0.42
addPoints(0.34, 0.226)    // 0.566



////////// answer ///////////

// 좀 별로인 코드
function addPoints(a, b){
    const ret = +(a + b).toFixed(100).substring(0, 10);
    console.log('ret: ', ret);
}

// split으로 자르는 법도 있고
// 나누기 활용해도 되고

// 1단계
function addPoints(a, b){
    const alen = a.toString().length;
    const blen = b.toString().length;
    const len = alen > blen ? alen : blen;
    const ret = +(a+b).toFixed(len - 2);
    console.log('ret: ', ret);
}

// 2단계
function addPoints(a, b){
    const alen = a.toString().length;
    const blen = b.toString().length;
    const len = Math.max(alen,blen);
    const ret = +(a+b).toFixed(len - 2);
    console.log('ret: ', ret);
}

// 3단계
function getLength(x){
    return x.toString().length
}
function addPoints(a, b){
    const len = Math.max(getLength(a), getLength(b));
    const ret = +(a +b).toFixed(len - 2);
    console.log('ret :', ret);
}