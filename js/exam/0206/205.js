// 초성검색

function searchByKoreanInitialSound(data, query) {
    const result = [];
  
    data.forEach(location => {
      const initials = getKoreanInitialSound(location);
      if (initials.includes(query)) {
        result.push(location);
      }
    });
  
    return result;
  }
  
  function getKoreanInitialSound(str) {
    const hangulRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g; // Match Korean characters
    const initials = str.match(hangulRegex);
  
    return initials ? initials.join('') : str;
  }
  
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅇ'), ['강원도 고성군']);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱㅅㄱ'), ['강원도 고성군', '고성군 토성면']);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅌㅅㅁ'), ['고성군 토성면', '토성면 북면']);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅂㅁ'), ['토성면 북면', '북면']);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㅍㅁ'), []);
// assert.deepStrictEqual(searchByKoreanInitialSound(s, 'ㄱ1ㅅ'), ['김1수']);

// data
const s = ['강원도 고성군', '고성군 토성면', '토성면 북면', '북면', '김1수'];


console.log(searchByKoreanInitialSound(s, 'ㄱㅇ')); // ['강원도 고성군']
console.log(searchByKoreanInitialSound(s, 'ㄱㅅㄱ')); // ['강원도 고성군', '고성군 토성면']
console.log(searchByKoreanInitialSound(s, 'ㅌㅅㅁ')); // ['고성군 토성면', '토성면 북면']
console.log(searchByKoreanInitialSound(s, 'ㅂㅁ')); // ['토성면 북면', '북면']
console.log(searchByKoreanInitialSound(s, 'ㅍㅁ')); // []
console.log(searchByKoreanInitialSound(s, 'ㄱ1ㅅ')); // ['김1수']