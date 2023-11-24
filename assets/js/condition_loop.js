
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

// Vòng lặp
let a = [1,42,543,76,98,123,6,876]
b = {
    'fullname': 'anhnt',
    'age': 28,
    'gender': 'male',
    'birthday': '12/12/1995'
}
let keys = Object.keys(b)
// for (i = 0; i < keys.length; i++) {
//     console.log('i = ', keys[i], b[keys[i]]);
// }
Object.keys(b).forEach(k => {
    console.log('k = ', k, b[k]);
})

let tong = 0;
// for
// for (i = 0; i < a.length; i++) {
//     tong += a[i]
//     console.log(' i = ', i);
//     if (tong > 500) {
//         break;
//     }
// }

// while
// let tong = 0;
// let i = 0;
// while (tong <= 500) {
//     tong += a[i];
//     console.log('i = ', i);
//     i++;
// }
// console.log('tong = ', tong);

// forEach (thường dùng với DOM HTML là chính)

// each (thường dùng với DOM HTML là chính)