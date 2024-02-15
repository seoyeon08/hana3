debounce 
const debounce = (cb, delay) => {
  let timer;
  return (...args) => {  
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  }
}
act(100);
// 1초 동안 n번 호출 => 실행은 1회만!
// 1초 후 => cb(100) 실행
// 1.5초 후
act(100);

const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  }
}
const act = throttle(a => a + 1, 1000);
act(100);

// 1초 동안 n번 호출 => 실행은 1회만!
// 10초 동안 n번 호출 => 실행은 10회만!
// 매 1초 마다 => cb(100) 실행

// test
const debo = debounce(a => console.log('debo=', a + 1), 1000);
for (let i = 10; i < 15; i += 1)debo(i);

const thro = throttle(a => console.log('thro=', a+1), 1000);
for (let i = 10; i < 15; i +=1)thro(i);