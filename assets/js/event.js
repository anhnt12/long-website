// element selector
// document.getElementById('title-1').onclick = function (){
//     alert('1111111111');
// }
// document.getElementById('title-2').onclick = function (){
//     alert('22222222');
//     document.getElementById('title-1').addEventListener('click', clicktitle1_1);
//     document.getElementById('title-1').addEventListener('click', clicktitle1_2);
// }
// function clicktitle1_1(){
//     alert('123123');
// }
// function clicktitle1_2(){
//     alert('000000');
// }

// document.getElementById('title-3').onclick = function (){
//     alert('33333333');
//     document.getElementById('title-1').removeEventListener('click', clicktitle1_2);
// }
// document.getElementById('title-1').onmouseover = function (){
//     alert('okokok');
// }

// showInfo(this): this trong trường hợp này được coi là 1 element selector tới chính đối tượng chịu tác động của sự kiện
// function showInfo(e) {
//     alert(e.innerText);
// }

function getActive(){
    //lấy ra thẻ đang được focus
    var name = document.activeElement.tagName;
    // hiển thị
    document.getElementById('result').innerText = name;

    // lấy URL
    var a = document.URL;
    alert(a);
}

function getA() {
    var status = document.readyState;
    document.getElementById('result').innerText = 'Trạng thái của trang: ' + status;
}