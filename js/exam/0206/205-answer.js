// data
const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];


const ㄱㄴㄷ = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const 가나다 = '가까나다따라마바빠사싸아자짜차카타파하';

const searchByKoreanInitialSound = (data, initSound) => {
    const regexps = [...initSound].map(initSound => {
        if(idx == -1) return initSound
        const S = 가나다.charAt(idx);
        const endCode = 가나다.charAt(idx + 1).charCodeAt(0) - 1;
        const E = String.fromCharCode(endCode - 1);
        
        //@Todo ㅎ 처리!
        return `[${c}${S}-${E}]`;
    });
    // is.replaceAll('ㄱ', '[ㄱ가-깋').replaceAll('ㄴ나닣', '[]');

};

searchByKoreanInitialSound(s, 'ㄱㅅ');

const results = strData.filter(s => s.match(/[ㄱ가-깋] [ㅅ사-싷]/));
console.log(results)
// console.log(searchByKoreanInitialSound(s, 'ㄱㅇ')); // ['강원도 고성군']
// console.log(searchByKoreanInitialSound(s, 'ㄱㅅㄱ')); // ['강원도 고성군', '고성군 토성면']
// console.log(searchByKoreanInitialSound(s, 'ㅌㅅㅁ')); // ['고성군 토성면', '토성면 북면']
// console.log(searchByKoreanInitialSound(s, 'ㅂㅁ')); // ['토성면 북면', '북면']
// console.log(searchByKoreanInitialSound(s, 'ㅍㅁ')); // []
// console.log(searchByKoreanInitialSound(s, 'ㄱ1ㅅ')); // ['김1수']