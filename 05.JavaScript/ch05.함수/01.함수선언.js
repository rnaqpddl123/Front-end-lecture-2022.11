//함수선언에 두가지 방법
function sum (a,b) {                   // 선언적 함수
    return a+b;
}

function 더하기 (a,b) {                   // 함수명을 한글로 해도 가능
    return a+b;
}

const anonySum = function (a,b) {      //  익명 함수 (함수의 이름이 없음)
    return a+b;
}

console.log(sum(3,4));
console.log(더하기(3,4));
console.log(anonySum(3,4));

const arrowSum = (a,b) => a+b;          // 화살표 함수, 람다 함수
console.log(arrowSum(3,4));