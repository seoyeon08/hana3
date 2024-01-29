const user = {
    '': 1,        
    ' ': 1,       // 'id': 1, '0y': 2 모두 OK!
    123: 1,       // user[123], user['123'] OK, but user.123 is SyntaxError!!
    // 12345n: 2,    // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
    true: 1,      // OK  user[true]  user.true
    id: 2,          
    [`name`]: 'Hong',  // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
    [Symbol()]: 'Hong',   // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
    [`${new Date()}`]: 365,    // OK! 'Sun Jul …': 365
    'my-friends': ['Han', 'Kim'],
    getInfo: () => `${this.id}-${this.name}`,       // OK! But, this is not user!
    getInfo() { return `${this.id}-${this.name}`; }, // OK! getInfo의 최종 <f.o>
  } 


// Object.create는 prototype에!!
const u1 = Object.assign({}, user);
const u2 = { ...user };
const u3 = new Object(user);
const u4 = Object.create(user);
// const u4 = Object.create({}, { p: { value: 42 }, q: { value: 55 } });
console.log('u1=', u1, user === u1);
console.log('u2=', u2, user === u2);
console.log('u3=', u3, user === u3); // true!!
console.log('u4=', u4, user === u4);
console.log('u4.proto=', Object.getPrototypeOf(u4));