// 재귀함수(Recursive function)

// factorial
function factorial(num) {
    let product = 1;
    for (let i=1; i<=num; i++)
        product*=i;
    return product;
}
console.log(factorial(10));

function facto(num) {
    if (num == 0)
        return 1;
    return num*facto(num-1);
}
console.log(facto(10));

// Fibonacci 수열
function Fibonacci(num) {
    if (num==0 || num ==1)
        return 1;
    return Fibonacci(num-1) + Fibonacci(num-2);
}
for (let i=0; i<=10; i++)
    console.log(Fibonacci(i));