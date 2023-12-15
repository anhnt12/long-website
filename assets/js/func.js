const a = [1, 3, -41, 2, -56, -5];
const b = [1, -3, 12, -24, 4, -5, -4, 99];
const c = [1, -3, 12, -24, 4, -5, -4, 99, -11, -223];

// // Hàm truyền tham số
// function countNegativeNumbers(arr=[1,2,3,-4,-5]) {
//     let d = 0;
//     for(i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) d++;
//     }
//     document.write('<br />mang co '+ d +' so am');
// }

// countNegativeNumbers();
// countNegativeNumbers(a);
// countNegativeNumbers(b);
// countNegativeNumbers(c);

// Hàm trả về giá trị

const aPositive = countPositiveNumbers(a);
const bPositive = countPositiveNumbers(b);
const cPositive = countPositiveNumbers(c);
// document.write('3 mang co ' + (aPositive + bPositive + cPositive) + ' so duong');

// Giải phương trình bậc 2 với 3 tham số là a, b ,c
// In ra màn hình kết quả tìm nghiệm
// Viết thành hàm để giải nhiều phương trình bậc 2

function countPositiveNumbers(arr) {
    let d = 0;
    for(i = 0; i < arr.length; i++) {
        if (arr[i] > 0) d++;
    }
    return d;
}