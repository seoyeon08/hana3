type Address = { sigungu: string, zipcode: string };

interface Info<T, ID = number> {
    id: ID,
    name: string;
    additional: T;
}

class MyInfo<T, ID = number> implements Info<T, ID> {
    id: ID;
    name: string;
    additional: T;

    constructor(id: ID, name: string, additional: T) {
        this.id = id,
        this.name = name;
        this.additional = additional;
    }
}

const me = new MyInfo<Address, number>(1, 'lim', { sigungu: 'Seoul', zipcode: '04222' });
console.log(`I live in ${me.additional.sigungu}`);