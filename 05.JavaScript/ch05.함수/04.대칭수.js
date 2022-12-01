// 3자리 숫자 두개를 곱해서 만든 수중에서
// 대칭수(palindrome) 이면서 가장 큰 값은?
// 그때의 곱한수 두개는?

let palindrome=0, num1=0, num2=0;
for (let i=100; i<1000; i++){
    for (let k=100; k<1000; k++){
        let mul = (i*k).toString();
        let count = 0;
        while(true){
            if(mul[count] != mul[mul.length-count-1])
                break;
            count++;
            if (mul.length-1 == count) {
                mul = Number(mul);
                if(palindrome < mul){
                    palindrome = mul;
                    num1=i;
                    num2=k;
                }
                break;
            }
        }
    }
}
console.log(num1,num2,palindrome);


//함수이용해서 만들기
function isPalindrome (str) {
    let reverseStr = '';
    for (let i = str.length-1; i>=0; i--)
        reverseStr+=str[i];
    return str == reverseStr;
}

let maxPal=0, maxI=0, maxK=0;
for (i=100; i<1000; i++){
    for (k=100; k<1000; k++){
        let product = i*k;
        if (isPalindrome(String(product))){
            if (product > maxPal){
                maxPal = product;
                maxI = i;
                maxK = k;
            }
        }       
    }
}
console.log(`${maxI} * ${maxK} = ${maxPal}`)