// 다음과 같은 정수 배열이 주어졌을 때 구간의 합을 구하는 rangeSum 함수를 작성하시오.
import assert from 'assert'; // ESM 

const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];
function rangeSum(first, last) {
    var sum = 0;
    for (let i = first; i <= last; i += 1){
        sum += arr[i]
    }
    return sum;
}

// console.log(rangeSum(2, 5));
// console.log(rangeSum(3, 5));
// console.log(rangeSum(1, 4));
// console.log(rangeSum(0, 4));

assert.deepstrictEqual(rangeSum(2, 5), 19);
assert.deepstrictEqual(rangeSum(3, 5), 15);
assert.deepstrictEqual(rangeSum(1, 4), 14);
assert.deepstrictEqual(rangeSum(0, 4), 15);
assert.deepstrictEqual(rangeSum(5, 8), 30);
assert.deepstrictEqual(rangeSum(6, 8), 22);
assert.deepstrictEqual(rangeSum(2, 8), 41);
assert.deepstrictEqual(rangeSum(4, 4), 5);
assert.deepstrictEqual(rangeSum(5), 30);
assert.deepstrictEqual(rangeSum(2), 41);
assert.deepstrictEqual(rangeSum(), 45);