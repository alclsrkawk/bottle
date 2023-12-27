const sameInfo = document.querySelector('#same');
//이메일 직접입력 기능 시작
order_email_address.onclick = function () {
    if (order_email_address.value == "direct") {
        order_direct.style.display = "block";
    } else {
        order_direct.style.display = "none";
    }
}
receiver_email_address.onclick = function () {
    if (receiver_email_address.value == "direct") {
        receiver_direct.style.display = "block";
    } else {
        receiver_direct.style.display = "none";
    }
}
//이메일 직접입력 기능 끝



//주문자 정보와 같습니다 기능시작
sameInfo.onclick = function () {
    if (sameInfo.checked == true) {
        receiver_name.value = order_name.value; //이름
        receiver_num.value = order_num.value;  //핸드폰번호
        receiver_tel.value = order_tel.value;  //핸드폰 앞번호
        receiver_email.value = order_email.value; //이메일
        receiver_email_address.value = order_email_address.value; //이메일주소
        if (receiver_email_address.value == "direct") {
            receiver_direct.style.display = "block";
            receiver_direct.value = order_direct.value;
        } else {
            receiver_direct.style.display = "none";
        }
    } else {
        receiver_name.value = ""; //이름
        receiver_num.value = "";  //핸드폰번호
        receiver_tel.value = "010";  //핸드폰 앞번호
        receiver_email.value = ""; //이메일
        receiver_email_address.value = "naver.com";
        if (receiver_email_address.value == "direct") {
            receiver_direct.style.display = "block";
        } else {
            receiver_direct.style.display = "none";
        }
    }
}
//주문자 정보와 같습니다 기능끝


//결제방법 시작
const payOption = document.querySelectorAll('.section-second-one p input')
payOption.forEach(function (value) {
    value.onclick = function () {
        for (i = 0; i < payOption.length; i++)
            payOption[i].checked = false;
        this.checked = true;
    }
})
//결제방법 끝


//약관동의 시작
const agree = document.querySelector('.section-second-two');
agree.onclick = function (e) {
    let t = e.target;
    let c1 = check_1;
    let c2 = check_2;
    let c3 = check_3;
    let c4 = check_4;

    if (t.id == 'check_all') {
        let all = t.checked;
        c1.checked = all;
        c2.checked = all;
        c3.checked = all;
        c4.checked = all;
    } else {
        if (c1.checked && c2.checked && c3.checked && c4.checked) {
            check_all.checked = true;
        } else {
            check_all.checked = false;
        }
    }

}
//약관동의 끝



//결제하기버튼시작

//결제하기버튼끝