type TUser = {
    id: number;
    name: string;
};

type TUser2 = {
    id: number;
    name: string;
    addr?: string;
};

const hong: TUser = {id : 1, name: 'Hong'};
const lee: TUser2 = {id: 1, name: 'Lee', addr: 'Seoul'};

let tmpUser: TUser = lee; // ?
let partner: TUser = {...lee, id: 2, name: 'Kim'};  // ?
let partner2: TUser = {...hong, id: 3};  // ?
let friend: TUser = {...lee};  // ?
const xxx = {id: 9, addr: 'Sokcho'};
// let friend2: TUser = {...xxx, id: 8};  // ?



// -----------------------------

// 그냥 합치는게 시험문제.. 다 때려박아도 맞게 해 줄거다.

type X = {
    id: number;
    name: string;
}

type Y = {
    id: number, addr: string;
};

type Z = {
    [i:string]: string | number;
    id: number;
} & Y; 

// type Z = {
//     [i:string]: string | number;
//     id: number;
// } & {id: number; addr:string}; 
// 결합법칙, 분배법칙 모두 성립된다.

const compos: Z = {id: 1, name:'Hong', addr:'Seoul'};

// type ANY = any;
type ANY = number;
function addx(a: ANY, b: ANY = 10, c = 1):number{ // b:number | undefined랑 똑같다? // b?:ANY
    // return a + b;
    return a + (b ?? 0) + c;
}
// 뭐 화살표 함수로도 바꿔서 표현할 수 있다.

addx(1);
addx(1, undefined);         // undefined를 꼭 보내야 한다. 
addx(1, 2);


// ---------------------------
let numArr: number[] = [1, 2, 3];
numArr = [1];
let numTuple : [number, number] = [1, 2];
numTuple = [3, 4];
