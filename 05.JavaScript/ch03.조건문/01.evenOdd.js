// 1에서 10까지의 정수를 임의로 생성
const num = Math.ceil(Math.random() *10);

if (num % 2 == 0) {
    console.log(`${num}은 짝수입니다.`)
}

if (num % 2 == 1) {
    console.log(`${num}은 홀수입니다.`)
}