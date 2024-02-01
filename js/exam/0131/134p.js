// ex1) 배열의 각 원소를 String으로 변환하시오.
const assert = require('assert');
const arr = [1, 2, 3, true];
const ret1 = arr.map(item => item.toString());
console.log('ret1:', ret1);
assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);


const classNames = (...args) => args.reduce((acc, item) => 
    `${acc}${acc ? ' ' : ''} ${item}`, '')
    //`${acc}${acc} && item && item.trim() && ' '${item} && item.trim()`
    // `${acc}${acc} && item && ' '${item}`, '');
const ret2 = classNames('', 'a b c', 'd', ' ', 'e c'); 
console.log('ret2 : ', ret2);
assert.strictEqual(ret2, 'a b c d e'); 
/* // 주의: ' a b c d  e'면 안됨!! */
/* #example in React */
{/* <div classNames=({x ? 'a b' : ''}, {'' ? 'c' : ''}, {z && 'e f'}) */}