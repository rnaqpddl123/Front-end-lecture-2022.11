let perfectNum = [];
for (i=2; i<=10000; i++){
    let sum = 0;
    for (k=1; k<=i/2; k++){
        if (i % k==0)
            sum += k;
    }
    if (sum == i)
        perfectNum.push(sum);
}
console.log(perfectNum);