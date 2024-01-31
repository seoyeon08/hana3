const arr2 = [1, 2, 3, 4, 5];

// ex1) [2,3]을 추출
const answer1 = arr2.slice(1, 3)
console.log('1 : ', answer1)
// ex2) [3]부터 모두 다 추출
const answer2 = arr2.slice(2)
console.log('2 : ', answer2)
// ex3) [2,3,4] 제거하기
const answer3 = arr2.splice(1, 3);
console.log('3 :', answer3)
// ex4) 복원하기
console.log(arr2.splice(1, 0, ...arr2))
// ex5) [3] 부터 끝까지 제거하기
console.log(arr2.splice(2, 2))
// ex6) 복원하기
console.log(arr2.splice(2, 0, 3, 4, 5))
// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
console.log(arr2.splice(2, 1, 'X', 'Y', 'Z'))
// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const ex8 = [...arr2.slice(0, 2), 'X', 'Y', 'Z', ...arr2.slice(-2)];
console.log(ex8)