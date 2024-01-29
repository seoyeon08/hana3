//원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 / spread(...) 연산자를 사용하지 말고 작성하시오.
// const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
const newKim = copyObject(kim);        // shallow copy
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr); // true면 통과!

const newObj = {};
for (const k in obj)
	newObj[k] = obj[k];
