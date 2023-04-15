
let btn=document.querySelector(".dang-nhap");
let inputName = document.querySelector(".input-name");
let inputSinh = document.querySelector(".input-sinh");
let inputEmail = document.querySelector(".input-email");

btn.addEventListener('click', function(){
    let valueName = inputName.value;
    console.log('Họ tên của bạn: ' + valueName)
    inputName.value = '';
    alert('Họ tên của bạn: ' + valueName)
    console.log('clicked')
    valueName="";
})

btn.addEventListener('click', function(){
    let valueSinh = inputSinh.value;
    console.log('Ngày sinh của bạn: ' + valueSinh)
    inputSinh.value = '';
    alert('Ngày sinh của bạn: ' + valueSinh)
    console.log('clicked')
    valueSinh="";
})

btn.addEventListener('click', function(){
    let valueEmail = inputEmail.value;
    console.log('Câu hỏi của bạn: ' + valueEmail)
    inputEmail.value = '';
    alert('Câu hỏi của bạn: ' + valueEmail)
    console.log('clicked')
    valueEmail="";
})

let backBtn = document.querySelector('.button-back');
backBtn.addEventListener('click', function() {
    window.scrollTo(0,0);
})