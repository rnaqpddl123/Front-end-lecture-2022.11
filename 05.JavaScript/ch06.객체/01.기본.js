// 배열(array)
let fruits = ['감', '밤', '배'];
let personArray = ['제임스', 28, '남자', 175, '프로그래머', 30.0]

// 객체(Object)
let personInfo = {
    'name' : '제임스', 'age' : 20, 'gender' : '남자',
    'height' : 175, 'job' : '프로그래머', 'bmi' : 30.0
}
console.log(personInfo);

let maria = {name:'마리아', age:20, gender:'여자'};
console.log(maria);

//객체에 대한 접근(access)
console.log(maria['name'], maria['age']);   //이런 식으로는 사용하지 않는다.
console.log(maria.name, maria.age);

let key = 'age';
console.log(maria[key]);        // maria.key는 허용되지 않음;

const name = '홍길동';
const age = 35;
const gender = '남자';
const hong = {name:name, age:age, gender:gender};
console.log(hong);

//ES-6부터 가능
// key값과 같은 변수명은 생략가능
const hong2 = {name, age:50, gender};
console.log(hong2)