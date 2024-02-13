interface IDept {
    id: number;
    age: string;
    dname: string;
    captain: string;
};
type KoD = keyof IDept;
type KoU = keyof User;
type DoU = KoD | KoU;
let x: KoD = 'id';

type T11 = {id: number};
type T22 = T11 & {name: string};
let x2 : T22 = {id:1, name: 'Hong'};

type T33 = number | string;
type T44 = string |boolean;
type T55 = T3 & T4

// 합집합 같지만 교집합이 맞고, 그래서 수학적으로 교집합이라고 단정할 수 없다.
// 결국 의미를 잘 이해해야 한다.

type XXDept = {
    id: string | number;
    age: string | number;
    dname: string | number;
    captain: string | number;
}

type YYDept = {
    id: number;
    age: string;
    dname: string;
    captain: string;
}

type ZZDept = {
    id: number;
    dname: string;
}

type User1 = {
    id: number;
    number: string;
}

type x<T> = {
    [x in keyof T]: T[keyof T]
}

type XX<T> = {
    [x in keyof T]: T[x]
}

// type XDept = XX<IDept>; 
// type YDept = YY<IDept>;
// type Z<T, K extends keyof T> = {
//     [x in K]: T[x]
// }
// type ZDept = ZZ<IDept, 'id' |'age'>;