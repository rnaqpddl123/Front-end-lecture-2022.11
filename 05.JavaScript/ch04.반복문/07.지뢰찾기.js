//지뢰찾기
let N = 8;  // row,col이 8
let mines = [];

// Step 1. 초기 지뢰밭 만들기
// random값 > 0.7 지뢰(*), 나머지값 - 평지(.)

for (let i=1; i<=8; i++){
    let row = '';
    for (let k=1; k<=8; k++) {
        if (Math.random() > 0.7)
            row += '*';
        else    
            row += '.';
    }
    mines.push(row);
}

// for (let i=0; i<N; i++){
//     for (let k=0; k<mines[i].length; k++){
//         process.stdout.write(' ');
//         process.stdout.write(mines[i][k]);
//     }
//     console.log();
// }
printArray(mines);

function printArray(array) {
    for (let i=0; i<array.length; i++){
        for (let k=0; k<array[i].length; k++){
            process.stdout.write(' ');
            process.stdout.write(array[i][k]);
        }
        console.log();
    }
}

// Step2. Step 1 에서 구한 mines에 padding을 더해서 padMines를 만들고 출력하기
let padMines =[];
let padline = "";
for (let i=1; i<=mines.length+2; i++){
    padline += ".";
}
padMines.push(padline);
for (let i=0; i<mines.length; i++){
    let row ="." + mines[i] +".";
    padMines.push(row);
}
padMines.push(padline);

printArray(padMines);
console.log();
// Step3. final mines를 구한다.
let finalMines = [];
for (let i=1; i<=padMines.length-2; i++){       //array에 대한 loop
    let row = '';                           
    for (let k=1; k<=padMines[i].length-2; k++){
        if (padMines[i][k]=='*')
            row += '*';
        else{
            const count =                       // true면1 false면0인걸 이용
                (padMines[i-1][k-1]=='*') + (padMines[i-1][k]=='*') + (padMines[i-1][k+1]=='*') + 
                (padMines[i][k-1]=='*') + (padMines[i][k]=='*') + (padMines[i][k+1]=='*') + 
                (padMines[i+1][k-1]=='*') + (padMines[i+1][k]=='*') + (padMines[i+1][k+1]=='*');
            row += count;
        }
    }
    finalMines.push(row);
}

printArray(finalMines);

// AnyPang 가로,세로 같은숫자 3개이상이면 삭제 function으로 만들면 괜찮을듯
let anyPang = [];
for (i=0; i<N; i++) {
    let row = '';
    for (k=0; k<N; k++){
        row += Math.ceil(Math.random() * 6);
    }
    anyPang.push(row);
}
console.log('\n');
printArray(anyPang);