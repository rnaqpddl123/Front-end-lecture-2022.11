// // 완전수 구하기
// for (num = 2; num <= 10000; num++) {
//     // 자기 자신을 제외한 약수 구하기
//     let divisors = [];
//     for (let i = 1; i < num; i++) {
//         if (num % i == 0)
//             divisors.push(i);
//     }

//     // 약수의 합 구하기
//     let dSum = 0;
//     for (let div of divisors)
//         dSum += div;

//     // 약수의 합이 자신과 같은가?
//     if (num == dSum) {
//         process.stdout.write(`${num}: `);
//         process.stdout.write(divisors.toString());
//         console.log();
//     }
// }


/* 함수를 쪼개서 사용 */

// 약수구하기
function getDivisors(num) {
    let divisors = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0)
            divisors.push(i);
    }    
    return divisors;

}

// 완전수인지 판단
const sumArray = array => {
    let dSum = 0;
    for (let div of array)
        dSum += div;
    return dSum;  
}

for (let num = 2; num<=10000; num++){
    const array = getDivisors(num);
    const arrSum = sumArray(array);
    if (num == arrSum)
        console.log(num, ':', array.toString());
}