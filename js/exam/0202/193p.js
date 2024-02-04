// 흠..
// const weekNames = [... '일월화수목금토']; // string은 유사 배열 객체이다
const Month = new Date();

function printCalendar(m){

    const currentYear = Month.getFullYear();    // 현재 연도
    const firstDay = new Date(currentYear, m-1, 1);
    const lastDay = new Date(currentYear, m, 0);
    
    if (m < 1 || m > 12 || isNaN(m)){        // 오류 처리
        console.log("잘못된 입력 월");
        return;
    }
    // printCalendar(currentYear, m);
    // console.log(weekNames);
    console.log(`<< ${currentYear}년 ${m}월 >>`);
    console.log('일  월  화  수  목  금  토');

    let d = 1;
    let date = new Date(firstDay);

    while(date <= lastDay){
        let weekRow = '';

        for (let i = 0; i < 7; i++) {
            if (i >= date.getDay() || d > 1) {
              weekRow += `${d < 10 ? ' ' : ''}${d}  `;
              d++;
            } else {
              weekRow += '    ';
            }
            date.setDate(date.getDate() + 1);
          }
          console.log(weekRow);
    }

}

printCalendar(2);