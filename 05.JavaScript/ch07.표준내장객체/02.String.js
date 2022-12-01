let hello ='안녕하세요?';

//속성
console.log(hello.length);

//Methods
console.log(hello.charAt(0), hello[0]);
console.log(hello.concat('여러분!!!'));     // hello + '여러분!!!'

console.log(hello.indexOf('하'));

//디지털 시계, 00:00 ~ 23:59, 하루동안 3이 표시되는 시간은 몇초인가?

let totalSeconds =0;
for (let hour=0; hour<24; hour++){
    for(let minute=0; minute < 60; minute++){
        const display = hour + ':' + minute;
        if (display.indexOf('3') >=0){
            totalSeconds += 60;
        }
    }
}
console.log(totalSeconds);

//정규표현식
const sample = 'ㅜㅜ A quick brown fox 갈색의 재빠른 여우가 Jumps over 게으른 개들 The lazy dog. ㅋㅋ';

let newStr = sample.replace(/[A-Z]/,'대');       // '[A-Z]', '/[A-Z]/' 는 작동하지 않음
console.log(newStr);
newStr = sample.replace(/o/, '0');              // 한개만 바꿈
console.log(newStr);
newStr = sample.replace(/o/g, '0');             // 모든 o를 0으로 바꿈
console.log(newStr);
console.log(sample.replace(/[A-Z]\w+/g,'XXX'));

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);
// 한그로가 공백만남기고 나머지 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);

// split
let fruits = '사과,배,감,포도';
let fruitArray = fruits.split(',');
console.log(fruitArray);
const products = '망치,나사,못,톱,도끼'.split(',');
console.log(products);

fruits = '사과, 배, 감, 포도';
fruitArray = fruits.split(', ');
console.log(fruitArray);

fruits = '사과, 배, 감, 포도';
fruitArray = fruits.split(', ');
console.log(fruitArray);
fruitArray = fruits.split(',').map(s => s.trim());      // array element 각각에 대해서 callback함수 적용
console.log(fruitArray);

//문자열의 일부분 수출
const today = new Date().toISOString();
console.log(today);
//2022-12-01T06:29:08.095Z
console.log(today.substring(0,10));         // 날짜 추출 2022-12-01 
console.log(today.substring(11,19));        // 시간 추출 06:32:00

//현재 날짜/시간을 YYYY-Mm_dd hh:mm:ss 형식으로 만들어 주는 함수
function twoDigit(num) {
    return (num < 10 ? '0' + num : String(num));  // String(num))아니면 num +''
}
function datetime() {
    const now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())}` + " " +
            `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`
}
const now = datetime();
console.log(now);
console.log(now.substring(2,16));       //22-12-01 15:48