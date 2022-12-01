let personInfo = {
    'name' : '제임스', 'age' : 20, 'gender' : '남자',
    'height' : 175, 'job' : '프로그래머', 'bmi' : 30.0
}

// let .. in.. 을 쓰면 key 값을 끌어냄
for (let attr in personInfo) {
    console.log(attr, ':',  personInfo[attr]);
}

// array에서는 for .. of 반복문을 써야 하지만, for ..in을 사용할수도 있음.
let fruits = ['감', '귤', '배'];
for (let index in fruits) {
    console.log(index, fruits[index]);
}

//array에서는 이 방법을 더 많이쓴다.
for (let fruit of fruits) {
    console.log(fruit);
}

/*
 * Json(JavaScript Object Notation)  
 *      외부와 데이터를 주고 받는 경우에 사용됨
 *      사실상의 업계 표준(de facto standard)
 */
// JSON화 - String타입
const externalForm = JSON.stringify(personInfo);
console.log(externalForm);
// Json 읽기 - Object타입
const internalForm = JSON.parse(externalForm);
console.log(internalForm);


// Array(배열)도 잘되나 확인
const exFruits = JSON.stringify(fruits);
console.log(exFruits);
const inFruits = JSON.parse(exFruits);
console.log(inFruits);