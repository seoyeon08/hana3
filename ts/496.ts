type R = Record<string, number>;
// type R = { [x:string]: number;};

// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
let users = [
    {name: 'Hong'},
    {age: 23},
    {id: 1, addr: 'Seoul'},
];

type Users = typeof users;

// type FullUser = {
//     [k in keyof Users[number]]: (Users[number])[k]
// };


// type FullUser = R & Record<string, any>;

// Partial을 써주면 된다. 다 물음표 붙여버리는 꼴
type FullUser = Partial<Record<keyof Users[number], string | number>>;
const ret: FullUser = users.reduce((acc, cur) => ({...acc, ...cur}), {});