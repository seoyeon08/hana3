console.log(Object.keys(user), Object.keys(user).length); // keys & 15, Symbol은 제외!!

console.log(Reflect.ownKeys(user), Reflect.ownKeys(user).length); // keys & 16 (+Symbol)

user.addr = 'Seoul';   // ⇐⇒ user = {...user, addr: 'Seoul'}
console.log('addr' in user, user.hasOwnProperty('addr')); // true true
console.log('Ref.has>', Reflect.has(user, 'addr'));  // true
console.log('obj.getOwnPropSym>', Object.getOwnPropertySymbols(user)); // [ Symbol() ]


delete user.addr;    // ⇔ Reflect.deleteProperty(user, 'addr');
console.log('addr' in user); // false


user[`${user.id}'s name`] = `Mr. ${user.name}`;     // prop생성시 snapshot!!(id 변해도 고정)
console.log('user entries=', Object.entries(user)); // Symbol은 제외!!

function entriesWithSymbol(obj) {
    const rets = [];
    if (!obj || typeof obj !== 'object') return [];
    for (const k of Reflect.ownKeys(obj)) {
      console.log('k=', k);
      rets.push([[k, obj[k]]]);
    }
    return rets;
  }
  console.log('ref.entries>>', entriesWithSymbol(user));


  // 한 번 짜보세요
  function myEntries(obj){
    const rets = [];    // [] [k, v], [k, v] ... ]
    for (let k in Reflect.ownKeys(obj)) {
        console.log(k);

        rets.push([k, obj[k]]);
    }
    return rets;
}
console.log('myEntries>>', myEntries(user));
