
// Câu lệnh điều kiện
// let a = 12312;
// let a = 'anhnt';
// Câu lệnh if sẽ kiểm tra tính đúng sai (Boolean) của điều kiện bên trong
// if (a) {
//     console.log('a có dữ liệu');
// } else {
//     console.log('a  = 0');
// }

// switch (a) {
//     case 1:
//         console.log('a = 1');
//         break;
//     case 0:
//         console.log('a = 0');
//         break;
//     default:
//         console.log('ối dồi ôi');
//         break;
// }

// let a = -10;
// if (a % 2 == 0) {
//     console.log(a, 'đây là số chẵn');
// } else {
//     console.log(a, 'đây là số lẻ');
// }
// var so = 10;
// if (so == 0) {
//     console.log('không');
// } else if (so == 1) {
//     console.log('Một');
// } else if (so == 2) {
//     console.log('Hai');
// } else {
//     console.log('Không thỏa mãn');
// }
// switch (so) {
//     case 0:
//         console.log('không');
//         break;
//     case 1:
//         console.log('Một');
//         break;
//     case 2:
//         console.log('Hai');
//         break;
//     case 3:
//         console.log('Ba');
//         break;
//     case 4:
//         console.log('Bốn');
//         break;
//     case 5:
//         console.log('Năm');
//         break;
//     default:
//         console.log('Không thỏa mãn');
//         break;
// }


// let diem = 0.25;

// if (diem < 0 || diem > 10) {
//     console.log('Điểm không hợp lệ');
// } else if (diem < 4) {
//     console.log('Học Lại');
// } else if (diem < 5.5) {
//     console.log('Loại D');
// } else if (diem < 7) {
//     console.log('Loai C');
// } else if (diem < 8.5) {
//     console.log('Loại B');
// } else {
//     console.log('Loai A');
// }


// Vòng lặp
// b = {
//     'fullname': 'anhnt',
//     'age': 28,
//     'gender': 'male',
//     'birthday': '12/12/1995'
// }
// let keys = Object.keys(b)
// for (i = 0; i < keys.length; i++) {
//     console.log('i = ', keys[i], b[keys[i]]);
// }
// Object.keys(b).forEach(k => {
//     console.log('k = ', k, b[k]);
// })
// let a = [1,42,543,76,98,123,6,876]
// // console.log(a[0]);
// let tong = 0;
// for (i = 0; i < a.length; i++) {
//     // if (a[i] >= 100) {
//     //     continue;
//     // }
//     tong += a[i];
//     console.log(' i = ', i);
//     console.log('tong tại ', i, ' = ', tong);
//     if (tong > 600) {
//         break;
//     }
// }

// let i = 0;
// while (tong <= 600) {
//     tong += a[i];
//     console.log(' i = ', i);
//     console.log('tong tại ', i, ' = ', tong);
//     i++;
// }
// console.log('tong = ', tong);

// forEach (thường dùng với DOM HTML là chính)

// each (thường dùng với DOM HTML là chính)
