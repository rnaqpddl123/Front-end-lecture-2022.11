
function answer1() {
    let num1 = parseInt($('#num1').val());
    let num2 = parseInt($('#num2').val());
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || (num2 - num1) < 4)
        alert("입력 값의 범위를 확인하세요.");

    let powerArray = [];
    for (let i = num1; i <= num2; i++) {
        powerArray.push(Math.pow(2, i));
    }
    $('#result1').text('결과' + powerArray)
        .css('color', 'blue');
};


function answer2() {
    let text = $('#text2').val();
    const noPunct = text.replace(/[',.]/g, '').replace(/[-\n]/g, ' ');
    $('#noPunct').text(noPunct);

    let count = 0;
    const words = noPunct.split(' ');
    for (let word of words) {
        if (word == 'the')
            count++;
    }
    $('#result2').text(`'the'의 개수는 ${count}입니다.`)
        .css('color', 'blue');
}

function answer3() {
    let prices = $('#price').val().split(';').map(x => parseInt(x));

    prices.sort((a, b) => b - a);          //내침차순으로 정렬됨

    $('#result3').text(prices)
        .css('color', 'blue');
}

var cars = [];
function answer4_add() {
    cars.push($('#car').val());
}
function answer4() {
    const manu = cars.map(x => x.split(' ')[0]);
    const model = cars.map(x => x.split(' ').slice(1).join(' '));

    $('#input').text(cars);
    $('#manufacturer').text(manu);
    $('#model').text(model);
}


function twoDigit(num) {
    return (num < 10 ? '0' + num : String(num));  // String(num))아니면 num +''
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth() + 1)}-${twoDigit(date.getDate())}` + " " +
        `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}

$(document).ready(function() {
    setInterval(() => {
        const now = new Date();
        const currDay = myDatetime(now).substring(0,10);
        const weekday = '일월화수목금토'.split('')[now.getDay()];
        const currentDay = `${currDay}(${weekday})`;
        
        const currentTime = myDatetime(now).substring(11);

        $('#date').text(currentDay);
        $('#time').text(currentTime);

        const mapping = [0,1,3,4,6,7];
        $('.numberTimer').each(function(index, element) {
            $(this).attr('src',`../../img/digits/${currentTime[mapping[index]]}.svg`);
        });
       /* $('#t1').attr('src',  `../../img/digits/${currentTime[0]}.svg`);
        $('#t2').attr('src',  `../../img/digits/${currentTime[1]}.svg`);
        $('#t3').attr('src',  `../../img/digits/${currentTime[3]}.svg`);
        $('#t4').attr('src',  `../../img/digits/${currentTime[4]}.svg`);
        $('#t5').attr('src',  `../../img/digits/${currentTime[6]}.svg`);
        $('#t6').attr('src',  `../../img/digits/${currentTime[7]}.svg`); */

    }, 1000);
});

