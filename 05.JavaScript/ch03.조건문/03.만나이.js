const bYear = 2000;
const bMonth = 9;
const bDay = 5;

const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth()+1;
const tDay = today.getDate();

let fullAge;
if (bMonth < tMonth) {
    fullAge = tYear - bYear;
} else if (bMonth > tMonth){
    fullAge = tYear - bYear - 1;
} else {     // 생월가 현재월이 같을경우
    if (bDay <= tDay){
        fullAge = tYear - bYear;
    } else{
        fullAge = tYear - bYear - 1;
    }
}

console.log(`생년월일 : ${bYear}-${(bMonth<10) ? '0' + bMonth : bMonth}-${(bDay<10) ? '0' + bDay : bDay}`);
console.log(`오늘날짜 : ${tYear}-${(tMonth<10) ? '0' + tMonth : tMonth}-${(tDay<10) ? '0' + tDay : tDay}`);
console.log(`만나이 : ${fullAge}`);