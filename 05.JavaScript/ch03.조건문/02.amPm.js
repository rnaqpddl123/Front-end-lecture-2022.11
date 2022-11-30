const date = new Date();

console.log(date.getFullYear());    // 년도
console.log(date.getMonth()+1);     // 월, 1적게나옴
console.log(date.getDay());         // 요일
console.log(date.getDate());        // 날짜
console.log(date.getHours());       // 시
console.log(date.getMinutes());     // 분
console.log(date.getSeconds());     // 초

const hour = date.getHours();
if (hour < 12)
    console.log(`${date.toDateString()}은 오전입니다.`);
else
    console.log(`${date.toDateString()}은 오후입니다.`);

const amPm = (hour < 12) ? '오전' : '오후';
console.log(`${date.toDateString()}은 ${amPm}입니다.`);