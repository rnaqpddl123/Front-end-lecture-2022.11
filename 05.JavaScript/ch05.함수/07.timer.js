// js는 위에서 부터 실행하지만 그 결과를 기다리지는 않는다.
const si = setInterval(function() {            // setInterval(callback함수, 주기(ms))
    console.log(new Date());
}, 1000);

setTimeout(() =>  console.log('1초경과'), 1000 );     // 1초후에 동작을 실행

setTimeout ( () => clearInterval(si), 5000);        // 5초후에 인터벌 동작을 멈춤
