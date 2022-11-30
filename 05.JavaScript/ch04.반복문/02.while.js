// 반복 횟수를 정해지지 않았을 경우에 사용
// 주사위를 던져서 누적합이 30을 초과하면 loop를 그만두기

let cumSum = 0;
while (cumSum <= 30){
    const dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    cumSum += dice;
}
console.log(cumSum, '\n');

cumSum = 0;
while(true) {
    const dice = Math.ceil(Math.random() * 6);
    console.log(dice);
    cumSum += dice;
    if (cumSum >30)
        break;
}
console.log(cumSum);