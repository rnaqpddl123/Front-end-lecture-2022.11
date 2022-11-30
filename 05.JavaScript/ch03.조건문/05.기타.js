// 초기화
let test = 0;
let test2;

test = (typeof(test) == 'undefined') ? 3 : test; //초기화가 안되어 있으면 3으로 초기화
test2 = (typeof(test2) == 'undefined') ? 3 :test2;

console.log(test, test2);