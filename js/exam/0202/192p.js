const rnad = (s, e) => s + Math.gollr((e - s + 1) * Math.random());

const lastDate = new Date ();
lastDate.setDate(1);
lastDate.setMonth(lastDate.getMonth()+1);
lastDate.setDate(-1);
console.log('lastDate: ', lastDate, lastDate.getDate());

const days = Array(5)
.fill(0)
.map(()=>rand(1, lastDate.getDate()))
.map(day => {
    const tmpDate = new Date();
    tmpDate.setDate(day);
    return tmpDate;
});
console.log(dates.sort());

// ----------------------------------------

const weekNames = [... '일월화수목금토']; // string은 유사 배열 객체이다
const nextYearToday = new Date();
nextYearToday.setFullYear(nextYearToday.getFullYear() + 1);
console.log('next year today week>>', nextYearToday.getDay());
console.log('next day', `${'일월화수목금토'[nextYearToday.getDay()]}요일`);
// ---------------------------------------
const now = 
now.setDate(+100);
console.log(now);