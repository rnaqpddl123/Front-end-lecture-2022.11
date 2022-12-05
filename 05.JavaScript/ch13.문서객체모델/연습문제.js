function answer1() {
    let nume1Node = document.getElementById('num1');
    let nume2Node = document.getElementById('num2');
    let num1 = parseInt(nume1Node.value);
    let num2 = parseInt(nume2Node.value);
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || (num2 - num1) < 4)
        alert("입력 값의 범위를 확인하세요.");

    let powerArray = [];
    for (let i = num1; i<=num2; i++){
        powerArray.push(Math.pow(2,i));
    }
    let resNode = document.getElementById('result1');
    resNode.innerHTML = '결과: ' + powerArray;
    resNode.style.color = 'blue';
};


function answer2() {
    let count = 0;
    let textNode = document.getElementById('text2');
    let text = textNode.value;
    const noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g,' ');
    document.getElementById('noPunct').innerHTML = noPunct;

    const words = noPunct.split(' ');
    for (let word of words) {
        if (word == 'the')
            count++;
    }
    const resNode = document.getElementById('result2');
    resNode.innerHTML = `'the'의 개수는 ${count}입니다.`;
    resNode.style.color = 'blue';
}

function answer3() {
    let priceStr = document.getElementById('price').value;
    let priceStrArr = priceStr.split(';');            // ['51900', '30200', '20000', ....]
    let prices = priceStrArr.map(x => parseInt(x));      // [51900, 30200, 20000,..]
    /*
    위에 map한걸 풀어쓴것 map을 쓰는걸 익숙해지자
    let prices = [];
    for (let str of priceStr)
        priceStr.push(parseInt(str));
    */
    
    prices.sort((a,b) => b-a);          //내침차순으로 정렬됨

    const resNode = document.getElementById('result3');
    resNode.innerHTML = prices;
    resNode.style.color = 'blue';
}

var cars = [];
function answer4_add() {
    const carNode = document.getElementById('car').value;
    cars.push(carNode);
}
function answer4() {
    const manu = cars.map(x => x.split(' ')[0]);
    /* 
    아래 model1을 풀어 쓴것한번에 쓰는것에 익숙해지는게 좋음
    const model = cars.map( x => {
        let y = x.split(' ');
        let m = y.slice(1);
        return m.join(' ');
    });
    */
   const model = cars.map(x => x.split(' ').slice(1).join(' '));

   document.getElementById('input').innerHTML = cars;
   document.getElementById('manufacturer').innerHTML = `제조사 :  ${manu}`;
   document.getElementById('model').innerHTML = `모델명: ${model}`;


}