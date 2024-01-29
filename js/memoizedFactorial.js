// O(N)
let runCnt = 0;
// function factorialBeforeMemoization(n) {
//     runCnt += 1;
//     if (n === 1) return 1;
//     return n * factorial(n - 1);
// }

// O(logN)                      // {15: 15 * f(14), 14: 14 * f(13), ... 6: 6 * f(5)}
const memoizedTable = {};       // {5: 5 * f(4), 4: 4 * f(3) = 6}
                                // 3: 3 * 2, 2: 2 * 1
runCnt += 1
function factorial(n){
    if(n === 1) return 1;
    return memoizedTable[n] || (memoizedTable[n] = n * factorial(n-1));
}

const f3 = factorial(3);
console.log('f3:', f3, runCnt);

const f5 = factorial(5);
console.log('f5:', f5, runCnt)

console.log("-------------------------------------------")

// closure 사용
function memoized(fn){
    const memoizedTable = {};
    return function(k) {
        // if (memoizedTable[k]) 
        //     return memoizedTable[k];
        // return (memoizedTable[k] = fn(k));
        return memoizedTable[k] || (memoizedTable[k] = fn(k));
    }
}


function memoizedFactorial(n){
    runCnt += 1;
    return memoized(function(n) {
        if(n == 1) return 1;
        return n * memoizedFactorial(n-1);
    });
}

const mf3 = memoized(3);
console.log('mf3:', f3, runCnt);

const mf5 = memoizedFactorial(5);
console.log('mf5:', f5, runCnt)

const mf15 = memoizedFactorial(15);
console.log('mf15:', mf15, runCnt);
