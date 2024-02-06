// import assert from 'assert';
const ㄱ = 'ㄱ'.charCodeAt(0);
const ㅎ = 'ㅎ'.charCodeAt(0);
const 가 = '가'.charCodeAt(0);

const JAUM_ALPHA_NUMS = [108, 76, 109, 77, 110, 78, 114, 82, 48, 49, 51, 54, 55, 56,];
// const x = [...'lLmMnNrR013678'].map( s => s.charCodeAt(0));

const isEndJaum = str =>{
    const s = str.charCodeAt(str.length - 1);
    if(s >= 12623 && s <= 12643) return false;
    if(s >=  ㄱ && s <= ㅎ) return true;
    if((s - 가) % 28 > 0) return true;
    return false;
};

for(let i = 가; i < 나; i+= 1){
    console.log(i, String.fromCharCode(i));
}
for(let i = 12593; i <= 12622; i += 1)
    console.log(i, String.fromCharCode(i));


// 28로 나누어 떨어지면 모음으로 끝나는거다.

// isEndJaum('강원도');   // false
// isEndJaum('바라당');   // true
// isEndJaum('ㅜㅜ');    // false
// isEndJaum('케잌');    // true
// isEndJaum('점수 A');  // false   cf. isEndJaum('알파벳L')은 true
// isEndJaum('24');     // false   cf. isEndJaum('23')은 true 136780

asserts.strictEqual(isEndJaum('강원도'), false);
asserts.strictEqual(isEndJaum('바라당'), true);
asserts.strictEqual(isEndJaum('ㅜㅜ'), false);
asserts.strictEqual(isEndJaum('케잌'), true);
asserts.strictEqual(isEndJaum('점수 A'), false);
asserts.strictEqual(isEndJaum('24'), false);

const josa = (str, josaStr) => {
    const josas = josaStr.split('/');
    isEndJaum(str) ? josas[0] : josas[1];
}
const iga = str => josa(str, '이/가');
const eunun = str => josa(str, '은/는');