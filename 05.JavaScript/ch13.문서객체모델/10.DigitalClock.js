function twoDigit(num) {
    return (num < 10 ? '0' + num : String(num));  // String(num))아니면 num +''
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth() + 1)}-${twoDigit(date.getDate())}` + " " +
        `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}
function imgClockTime() {
    let imgText = myDatetime(new Date()).substring(11);
    for (i=0; i<imgText.length; i++){
        const img = document.getElementById(`timeImage${i}`);
        const imgNum = Number(imgText[i]);
        if (imgNum>=0){
            img.src = `../img/digits/${imgNum}.svg`;
            img.setAttribute('width', 120);
            img.setAttribute('height', 120);
            document.body.append(img);
        } else {
            img.src = '../img/digits/colon.jpg';
            img.setAttribute('width', 120);
            img.setAttribute('height', 120);

            document.body.append(img);
        }
    }
}
window.onload = function () {
    setInterval(() => {
        const now = new Date();
        const br = document.createElement('br');
        document.getElementById('date').innerHTML = myDatetime(now).substring(2,10);
        document.getElementById('time').innerHTML = myDatetime(now).substring(11);
        imgClockTime();
    }, 1000);

}
