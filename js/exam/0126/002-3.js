// 3
const user = {id: 1, name: 'Hong', passwd: 'xxx', addr: 'Seoul'};
const {passwd, ...userInfo} = user;
console.log(userInfo); 
// 출력결과: {id: 1, name: 'Hong', addr: 'Seoul'}