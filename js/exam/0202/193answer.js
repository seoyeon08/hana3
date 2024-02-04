const getLastDate = (yearOrDate, month = -1) => {
    const isReceiveDate = typeof yearOrDate == 'object';
    const dt = isReceiveDate ? yearOrDate : new Date();
    console.log('dt:', typeof dt);
    if(!isReceiveDate) dt.setFullYear(yearOrDate);
    if(month <= 0 && month <= 11) dt.setMonth(month - 1);
    dt.setDate(1);
    dt.setMonth(dt.getMonth() + 1);
    console.log('dt11: ', dt);
    dt.setDate(0);
    console.log('dt22: ', dt);
    return dt.getDate();
}

const calendar = (year, month) => {
    const dt = new Date();
    dt.setFullYear(year);
    dt.setMonth(month - 1);
    dt.setDate(1);

    const preBlanks = Array(dt.getDate()).fill(' ');
    console.log('preBlanks: ', preBlanks);
    const days = Array.from({length: getLastDate(dt)}, (_,i) => i + 1);
    console.log('days: ', days);
}