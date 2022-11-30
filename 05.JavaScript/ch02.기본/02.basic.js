// 출력 메소드
console.log("Hello", "world", "!!!");

//상수,변수 (타입을 주지않음(타입 주는 방법도 없음))
const hello = "안녕하세요?";    // 상수
var x = 3;                      // 변수, 2015년 이전
let y = 4;                      // 현시전에서는 var 대신에 let을 사용
a = 20;                         // 안써도 됨
console.log(hello,x,y,a);
//기본  자료형
//1. Number
console.log(typeof(1), typeof(3.14));
console.log(2**10); //2의 10제곱

//2.문자열
console.log(typeof('hello'), typeof("world"));
console.log(hello[0], hello[5]);        //Java에서는 hello.charAt(0) 또는 hello.substring(0,1)와같이 표현해야함
console.log(`${hello} 3 + 4 = ${x+y}`);   // template literal, $[변수]를 쓰면 변수 출력가능
console.log(`올해는 ${new Date().getFullYear()}년입니다.`);  //Java방식 : "올해는" + "new Date().getFullyer()" + "년입니다."

//3. 불리언(boolean)
console.log(typeof(true), typeof(false));
console.log(true < 10);             //ture가 1로 변환이 되어 비교 연산을 수행

//4. 함수(function)
console.log(typeof function() {});
console.log(typeof(() => {}));  // 람다 함수, Java에서는 () -> {}

//5. 객체(Object)
// let obj = {'x':3, 'y':4};      
let obj = {x,y};       //{x:x, {y:y}}  위에서 x와 y가 정의되어있으면 이렇게도 사용가능
console.log(typeof obj);
console.log(typeof {'x':3, 'y':4});
console.log(obj.x, obj.y);

//6. undefined
let alpha;
console.log(alpha);

// 증감 연산자
console.log(x++);       // 3이 출력되고 x의 값은 4가됨
console.log(++x);       // 5가 출력되고 x의 값도 5가됨

// 강제 자료형 변환
console.log(Number('101'), String(101), Number(true), Number(false));
console.log(Boolean(0) , Boolean(undefined), Boolean(''), Boolean(0.0), Boolean(null), Boolean(NaN));
console.log(Boolean(1), Boolean(0.1), Boolean(' '), Boolean(100));

console.log(Number('string'));      //NaN : Not a Number
console.log(Number('0o123'), Number('0x123'), Number('0b101'));     //8진수, 16진수, 2진수

//자동 자료형 변환
console.log(21 + 52 + '37','37'+21+ 31, );    //String concatentation, 더하기는 앞에서부터
console.log(1 + true, true + 'bool');

console.log(52-"37", '37' - 21, '37' * 2, '32'/2);    // 문자열이 숫자로 바뀌어 계산됨

//일치 연산자 - 자료형  (===은 자료형까지 비교)
console.log(1 == 1.0, 1===1.0);         // 둘다 숫자형이라 둘다 true
console.log(1 == '1.0', 1==='1.0', 1 == true, 1 === true);  // 값은 같으나 자료형이 다름, ===은 값뿐아니라 자료형까지 비교하기 때문에 false가 뜸

//상수
let today = new Date;
console.log(today);
// const today1 = new Date;    //const는 상수, 항상 같은수라는 의미로 변하지 않을 대상에 상수를 적용(java에 final과 비슷한듯)
// today1 = " ";   //run-time-error발생 const는 값을 미리 할당 시켜 놔야함
