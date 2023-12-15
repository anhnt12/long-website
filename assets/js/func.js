// const a = [1, 3, -41, 2, -56, -5];
// const b = [1, -3, 12, -24, 4, -5, -4, 99];
// const c = [1, -3, 12, -24, 4, -5, -4, 99, -11, -223];

// // // Hàm truyền tham số
// // function countNegativeNumbers(arr=[1,2,3,-4,-5]) {
// //     let d = 0;
// //     for(i = 0; i < arr.length; i++) {
// //         if (arr[i] < 0) d++;
// //     }
// //     document.write('<br />mang co '+ d +' so am');
// // }

// // countNegativeNumbers();
// // countNegativeNumbers(a);
// // countNegativeNumbers(b);
// // countNegativeNumbers(c);

// // Hàm trả về giá trị

// const aPositive = countPositiveNumbers(a);
// const bPositive = countPositiveNumbers(b);
// const cPositive = countPositiveNumbers(c);
// // document.write('3 mang co ' + (aPositive + bPositive + cPositive) + ' so duong');

// // Giải phương trình bậc 2 với 3 tham số là a, b ,c
// // In ra màn hình kết quả tìm nghiệm
// // Viết thành hàm để giải nhiều phương trình bậc 2

// function countPositiveNumbers(arr) {
//     let d = 0;
//     for(i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) d++;
//     }
//     return d;
// }

const arr = [1, 2, 3];
console.log(arr);
const arr2 = new Array(1, 2, 3);
console.log(arr2);



function solveEquation(){
    let a = prompt('số a là:');
    let b = prompt('số b là:'); 
    let c = prompt('số c là:'); 
    document.write('<br/>phương trình bậc 2 là: ' + a +'x2 + (' + b + ')x + ' + c);
    delta = b*b-4*a*c;
    x = -b/(2*a);
    x1 = (-b + Math.sqrt(delta)) / (2*a);
    x2 = (-b - Math.sqrt(delta)) / (2*a);
    if (delta < 0){
        document.write('<br/>phương trình vô nghiệm');
    }else if (delta == 0){
        document.write('<br/>phương trình có nghiệm kép: x1 = x2 = ' + x);
    }else {
        document.write('<br/>'+'phương trình có 2 nghiệm riêng biệt: <br/>' + 'x1 = '+ x1 +'<br/>' + 'x2 = ' + x2 );
    }
}
// solveEquation();
// solveEquation();