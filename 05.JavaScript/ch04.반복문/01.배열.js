// int[] array = {3,4,5,6,7};   => Java의 방식 
const array = [52, 34.5, '아침밤', '사과', true, false];
console.log(typeof array);          //object
console.log(array.length);          // 6
console.log(array[0], array[2],array[array.length-1]);

// 기본 for 반복문
for (let i=0; i<array.length; i++)
    console.log(array[i]);

// Enhanced for-loop 
console.log("Enhanced for-loop");
for (let item of array)
    console.log(item);
    
console.log(array);
console.log(array.toString());    // [ ]가 빠진 상태

