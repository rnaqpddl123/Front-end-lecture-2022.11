// Date 객체 생성 방법
// 1. 현재 날짜/시간
let today = new Date();
console.log(today);
console.log(today.toDateString());
console.log(new Date().toDateString());     // today.을누루면 자동완성으로 toDateString()가 안나와서 확인용 
console.log(today.toLocaleString());        //Timezone 방영되었음

// 2.Unix time 기준(1970.1.1 이후 ms 단위로)
let someDay = new Date(1.67e12);
console.log(someDay);

// 3. 문자열 기반
let strDate = new Date("December 1, 2022 17:05:00");
console.log(strDate);

// 4. 시간 요소(연, 월-1, 일, 시, 분, 초)
let timeDate = new Date(2022, 11, 1, 17, 6, 0);
console.log(timeDate);

//현재 날짜/시간을 YYYY-Mm_dd hh:mm:ss 형식으로 만들어 주는 함수
function twoDigit(num) {
    return (num < 10 ? '0' + num : String(num));  // String(num))아니면 num +''
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())}` + " " +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}
console.log(myDatetime(timeDate));

// 시간 더하고 빼기
today.setDate(today.getDate() + 100);
console.log(myDatetime(today));

// 오늘 : 1년 1개월 8일후
let date = new Date();
date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth() + 1);
date.setDate(date.getDate() + 1);
console.log(date);

// 시간 간격    
let now = new Date();
console.log(now.getTime()); //시간을 유닉스 타입으로 변경
const christMas = new Date(2022, 11, 25);
console.log(myDatetime(christMas)); 

const diffMs = christMas.getTime() - now.getTime();       // 크리스마스와 오늘사이의 밀리초
const diffDay = diffMs / (60*60*24*1000);
console.log(diffDay);
console.log(Math.ceil(diffDay));