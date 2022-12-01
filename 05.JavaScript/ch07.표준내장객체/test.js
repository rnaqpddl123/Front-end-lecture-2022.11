for (let i=0; i<=9; i++) {
    //i를 제외하고 모두 제거
    const re = new RegExp('[^' + i + ']','g');
    console.log(re);
}