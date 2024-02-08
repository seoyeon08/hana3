console.log('Hello Typesctipt!');

type User = {
    id: number;
    name: string;
};

// const hong: User = {id: 1, name: 'Hong'};
const kim: User = {id: 2, name: 'Kim'};

const s: string = 'abc';
let i = 1;
const n: null = null;
const u: undefined = undefined;

type Member = {
    name: string;
    addr: string;
    discountRage: number;
};
type Guest = {
    name: string;
    age: number;
};

type Customer = Member | Guest;

let customer: Customer;
customer = {
    name: '홍길동',
    addr: '용산구',
    age: 26
}