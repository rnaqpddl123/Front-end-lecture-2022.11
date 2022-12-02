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