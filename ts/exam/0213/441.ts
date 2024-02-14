// 1-1

const isStringNumber = (value: unknown): value is [string, number] =>
// typeof value === 'string'? value === 'string' : value === 'number';
//gpt의 답 Array.isArray(value) && value.length === 2 && typeof value[0] === 'string' && typeof value[1] === 'number';
    Array.isArray(value) && typeof value[0] === 'string' && typeof value[1] === 'number';

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};


// 1-2

interface Animal {}
interface Dog extends Animal {
    name: string;
}
interface Cat extends Animal {
    punch(): void;
}
class Retriever implements Dog {
    // 추가 해야함
    constructor(public name: string){
        this.name = name;
    }
}

function isDog(a: Animal): a is Dog {
	// return a instanceof Retriever;  // 이렇게만 쓰면, 확장성이 좋지 않음. dog implements 하는 모든 클래스를 다 적어줘야 하기 때문
    return 'name' in a && !('punch' in a);     // 이렇게 쓰삼
}