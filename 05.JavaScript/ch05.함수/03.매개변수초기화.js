// 매개변수의 값이 지정되지 않는 경우의 대처 방법
function print (name, count) {
    // if (!count)     //false가 되는경우 - 0, 0.0, '', NaN, undefined  (좋은방법아님)
    //     count = 0;
    count = count ? count : 0;      // 위처럼 if안쓰고 3항 연산자 활용해서 표현함
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print('사과', 10);
print('감');


function print2 (name, count=0){            //ECMA Script6(ES6), 파이썬에서 자주쓰이는방법
    console.log(`${name}이/가 ${count}개 있습니다.`);
}
print2('사과', 10);
print2('감');

