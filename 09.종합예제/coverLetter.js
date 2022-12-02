// 프로필 사진 변경
let imgnum = 0;
let titlenum = 0;
function imgChange() {
    if (imgnum % 3 == 0)
        document.getElementById("myImage").src = '../img/cat.jpg';
    else if (imgnum % 3 == 1)
    document.getElementById("myImage").src = '../img/이강인.jpg';
    else
    document.getElementById("myImage").src = '../img/avatar_man.png';
    imgnum++;
}

// 타이틀 누르면 색깔변경
function titleChange() {
    if (titlenum % 3 == 0)
    document.getElementById("titlebtn").className = 'container-fluid p-5 bg-primary text-white text-center';
    else if (titlenum % 3 == 1)
    document.getElementById("titlebtn").className = 'container-fluid p-5 bg-warning text-dark text-center';
    else
    document.getElementById("titlebtn").className = 'container-fluid p-5 bg-dark text-white text-center';
    titlenum++;
}

//시계 만들기
function twoDigit(num) {
    return (num < 10 ? '0' + num : String(num));  // String(num))아니면 num +''
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth() + 1)}-${twoDigit(date.getDate())}` + " " +
        `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}
// 문자열 바꾸기
function replaceStr(origin, index, str) {
    changeStr = origin.substring(0, index) + str + origin.substring(index + 1);
    return changeStr;
    // return `${origin.substring(0, index)}${str}${origin.substring(index + 1)}`;
}

// 시계 자동실행
    window.onload = function () {
        setInterval(() => {
            const now = new Date();
            let dateStr = myDatetime(now).substring(2,10);
            dateStr = replaceStr(dateStr,2,"년");
            dateStr = replaceStr(dateStr,5,"월");
            dateStr = replaceStr(dateStr,8,"일");
            document.getElementById('date').innerHTML = dateStr;
            document.getElementById('clock').innerHTML = myDatetime(now).substring(11);
        }, 1000);
    }