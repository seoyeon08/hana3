const hong = { id: 1, name: 'Hong' };
const choi = { id: 5, name: 'Choi' };
const kim = { id: 2, name: 'kim' };
const lee = { id: 3, name: 'Lee' };
const park = { id: 4, name: 'Park' };
const users = [kim, lee, park]; // 오염되면 안됨!!
const assert = require('assert');

const addUser = user => [...users, user];
const removeUser = user => users.filter((_user) => user.id !== user.id);
const changeUser = user => (oldUser, newUser) => user.map(_user => (_user.id == oldUser.id ? newUser : _user));

console.log('add>>', addUser(hong));

// addUser(hong);              // [kim, lee, park, hong]
// removeUser(lee);            // [kim, park]
// changeUser(kim, choi);     // [choi, lee, park]

// const arr = [1, 2, 3, true];
// const ret1 = arr.map();
// assert.deepStrictEqual(ret1, ['1', '2', '3', 'true']);