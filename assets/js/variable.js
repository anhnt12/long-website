
// Hằng
const a = 0;
const pi = 3.14;
const name = 'Tuấn Anh';

// Biến
let c = 3;
// Ép kiểu
c = Boolean(c)
let d = '1995.12';
d = parseInt(d);

// Các kiểu dữ liệu trong js
// int, float, string: không nói nữa
// NaN (not a number), undefined, null
// Boolean: chỉ nhận 2 giá trị "true" và "false"
let testBoolean = true;
let testString = 'anhnt';
testString = Boolean(testString);
let testUn = null; // null nghĩa là không có dữ liệu, khác với dữ liệu = không


// Object: đối tượng key: value
let testObject = {
    'name': 'Tuấn Anh',
    'age': 28,
    'gender': 'male',
    'phone': '0986526525',
}
// console.log('keys = ', Object.keys(testObject));
// console.log('value = ', Object.values(testObject));

// console.log('logic: ', !name);
// Array: mảng dữ liệu
let testArray = ['10', 12, null, undefined, NaN, false, 12.12, testObject, testString, {'name': 'Long', 'age': 20}];