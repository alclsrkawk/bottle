const sameInfo = document.querySelector('#same');
const receiverInfo = document.querySelector("#receiver_num");
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
    if (sameInfo.checked) {
        receiver_name.value = order_name.value; //이름
        receiver_num.value = order_num.value;  //핸드폰번호
        receiver_tel.value = order_tel.value;  //핸드폰 앞번호
        receiver_email.value = order_email.value; //이메일
        receiver_email_address.value = order_email_address.value; //이메일주소
        receiver_tel.onclick = function () {
            if (receiver_tel.value !== order_tel.value) {
                same.checked = false;
            } else {
                same.checked = true;
            }
        }
        receiver_email_address.onclick = function () {
            if (receiver_email_address.value !== order_email_address.value) {
                same.checked = false;
                if (receiver_email_address.value == "direct") {
                    receiver_direct.style.display = "block";
                } else if (receiver_email_address.value !== "direct") {
                    receiver_direct.style.display = "none";
                }
            } else {
                same.checked = true;
                if (receiver_email_address.value !== "direct") {
                    receiver_direct.style.display = "none";
                }
            }
        }
        if (receiver_email_address.value == "direct") {
            receiver_direct.style.display = "block";
            receiver_direct.value = order_direct.value;
        } else if (receiver_email_address.value !== "direct") {
            receiver_direct.style.display = "none";
        }

    }
    receiver_name.onkeydown = function () {
        same.checked = false;
    }
    receiver_num.onkeydown = function () {
        same.checked = false;
    }
    receiver_email.onkeydown = function () {
        same.checked = false;
    }

    // receiver_email_address.onclick = function(){
    //     same.checked = false;
    // }


    // else {
    //     receiver_name.value = ""; //이름
    //     receiver_num.value = "";  //핸드폰번호
    //     receiver_tel.value = "010";  //핸드폰 앞번호
    //     receiver_email.value = ""; //이메일
    //     receiver_email_address.value = "naver.com";

    //     if (receiver_email_address.value == "direct") {
    //         receiver_direct.style.display = "block";
    //     } else {
    //         receiver_direct.style.display = "none";
    //     }
    // }
}
order_name.onkeyup = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
order_num.onkeyup = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
order_email.onkeyup = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
order_tel.onclick = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
order_email_address.onclick = function () {
    if (order_email_address.value == "direct") {
        order_direct.style.display = "block";
    } else if (order_email_address.value !== "direct") {
        order_direct.style.display = "none";
    }
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
order_direct.onkeyup = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
/////////////////////////////////////////////////////////////////////////
receiver_name.onkeyup = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
receiver_num.onkeyup = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
receiver_email.onkeyup = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
receiver_tel.onclick = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
receiver_email_address.onclick = function () {
    if (receiver_email_address.value == "direct") {
        receiver_direct.style.display = "block";
    } else if (receiver_email_address.value !== "direct") {
        receiver_direct.style.display = "none";
    }
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
    }
}
receiver_direct.onkeyup = function () {
    if ((order_name.value == receiver_name.value) && (order_tel.value == receiver_tel.value) && (order_num.value == receiver_num.value) && (order_email.value == receiver_email.value) && (order_email_address.value == receiver_email_address.value) && (order_direct.value == receiver_direct.value)) {
        same.checked = true;
    } else {
        same.checked = false;
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
const payBtn = document.querySelector('.pay-button');

function valueClear() {
    order_name.value = "";
    order_num.value = "";
    order_email.value = "";
    order_email_address.value = "naver.com";
    order_tel.value = "010";
    order_direct.value = "";
    order_direct.style.display = "none";
    receiver_name.value = "";
    receiver_num.value = "";
    receiver_email_address.value = "naver.com";
    receiver_tel.value = "010";
    receiver_email.value = "";
    receiver_direct.value = "";
    receiver_direct.style.display = "none";
    zip_code.value = "";
    address_1.value = "";
    address_2.value = "";
    check_all.checked = false;
    check_1.checked = false;
    check_2.checked = false;
    check_3.checked = false;
    check_4.checked = false;
    pay_check1.checked = true;
    pay_check2.checked = false;
    pay_check3.checked = false;
    pay_check4.checked = false;
    same.checked = false;
}

payBtn.onclick = function () {
    if (pay_check1.checked) {
        if (check_1.checked == false || check_2.checked == false || check_4.checked == false) {
            swalMsg(0, "카드 결제", "이용약관(필수)에 동의해주세요");
            return;
        } else if (order_name.value == "" || order_num.value == "" || order_email.value == "" || order_num.value.length != 8) {
            swalMsg(0, "카드 결제", "주문자 정보를 확인해주세요");
            return;
        } else if (receiver_name.value == "" || receiver_num.value == "" || receiver_email.value == "" || receiver_num.value.length != 8) {
            swalMsg(0, "카드 결제", "수령자 정보를 확인해주세요");
            return;
        }
        else if (zip_code.value == "" || address_1.value == "" || address_2.value == "") {
            swalMsg(0, "카드 결제", "주소지를 확인해주세요");
            return;
        } else if (order_email_address.value == 'direct' && order_direct.value == "") {
            swalMsg(0, "카드 결제", "주문자 이메일을 입력하세요");
            return;
        } else if (receiver_email_address.value == 'direct' && receiver_direct.value == "") {
            swalMsg(0, "카드 결제", "수령자 이메일을 입력하세요");
            return;
        }
        else {
            swalMsg(1, "결제가 완료되었습니다.", "감사합니다.");
            valueClear()
        }
    } else if (pay_check2.checked) {
        if (check_1.checked == false || check_2.checked == false || check_4.checked == false) {
            swalMsg(0, "실시간 계좌이체", "이용약관(필수)에 동의해주세요");
            return;
        } else if (order_name.value == "" || order_num.value == "" || order_email.value == "" || order_num.value.length != 8) {
            swalMsg(0, "실시간 계좌이체", "주문자 정보를 확인해주세요");
            return;
        } else if (receiver_name.value == "" || receiver_num.value == "" || receiver_email.value == "" || receiver_num.value.length != 8) {
            swalMsg(0, "실시간 계좌이체", "수령자 정보를 확인해주세요");
            return;
        }
        else if (zip_code.value == "" || address_1.value == "" || address_2.value == "") {
            swalMsg(0, "실시간 계좌이체", "주소지를 확인해주세요");
            return;
        } else if (order_email_address.value == 'direct' && order_direct.value == "") {
            swalMsg(0, "실시간 계좌이체", "주문자 이메일을 입력하세요");
            return;
        } else if (receiver_email_address.value == 'direct' && receiver_direct.value == "") {
            swalMsg(0, "실시간 계좌이체", "수령자 이메일을 입력하세요");
            return;
        }
        else {
            swalMsg(1, "결제가 완료되었습니다.", "감사합니다.");
            valueClear()
        }
    } else if (pay_check3.checked) {
        if (check_1.checked == false || check_2.checked == false || check_4.checked == false) {
            swalMsg(0, "가상계좌", "이용약관(필수)에 동의해주세요");
            return;
        } else if (order_name.value == "" || order_num.value == "" || order_email.value == "" || order_num.value.length != 8) {
            swalMsg(0, "가상계좌", "주문자 정보를 확인해주세요");
            return;
        } else if (receiver_name.value == "" || receiver_num.value == "" || receiver_email.value == "" || receiver_num.value.length != 8) {
            swalMsg(0, "가상계좌", "수령자 정보를 확인해주세요");
            return;
        }
        else if (zip_code.value == "" || address_1.value == "" || address_2.value == "") {
            swalMsg(0, "가상계좌", "주소지를 확인해주세요");
            return;
        } else if (order_email_address.value == 'direct' && order_direct.value == "") {
            swalMsg(0, "가상계좌", "주문자 이메일을 입력하세요");
            return;
        } else if (receiver_email_address.value == 'direct' && receiver_direct.value == "") {
            swalMsg(0, "가상계좌", "수령자 이메일을 입력하세요");
            return;
        }
        else {
            swalMsg(1, "결제가 완료되었습니다.", "감사합니다.");
            valueClear()
        }
    } else if (pay_check4.checked) {
        if (check_1.checked == false || check_2.checked == false || check_4.checked == false) {
            swalMsg(0, "휴대폰결제", "이용약관(필수)에 동의해주세요");
            return;
        } else if (order_name.value == "" || order_num.value == "" || order_email.value == "" || order_num.value.length != 8) {
            swalMsg(0, "휴대폰결제", "주문자 정보를 확인해주세요");
            return;
        } else if (receiver_name.value == "" || receiver_num.value == "" || receiver_email.value == "" || receiver_num.value.length != 8) {
            swalMsg(0, "휴대폰결제", "수령자 정보를 확인해주세요");
            return;
        }
        else if (zip_code.value == "" || address_1.value == "" || address_2.value == "") {
            swalMsg(0, "휴대폰결제", "주소지를 확인해주세요");
            return;
        } else if (order_email_address.value == 'direct' && order_direct.value == "") {
            swalMsg(0, "휴대폰결제", "주문자 이메일을 입력하세요");
            return;
        } else if (receiver_email_address.value == 'direct' && receiver_direct.value == "") {
            swalMsg(0, "휴대폰결제", "수령자 이메일을 입력하세요");
            return;
        }
        else {
            swalMsg(1, "결제가 완료되었습니다.", "감사합니다.");
            valueClear()
        }
    }
}
//결제하기버튼끝

//핸드폰번호 8자리 제한
function handleOnInput(el, maxlength) {
    if (el.value.length > maxlength) {
        el.value = el.value.substr(0, maxlength);
    }
}
//핸드폰번호 8자리 제한


//주문상품 받아오기
// console.log(localStorage.getItem('products'))
if (localStorage.getItem('products') == null){ //|| (localStorage.getItem('products') != null) && ) {
    function getUrlParams() {
        const params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
        return params;
    }
    const params = getUrlParams();
    let goods = [];
    const url = `../datas/${params.name}_view.json`;
    fetch(url)
        .then(type => type.json())
        .then(result => {
            goods = result.data;
            goodsView();
        }).catch(error => {
            // console.log(error);
        });

    const goodsView = () => {
        // console.log("goods :", goods)
        let figure = "";
        for (let i = 0; i < goods.length; i++) {

            if (goods[i].Idx == params.idx) {
                const picture = goods[i].product_img.split(',');
                // console.log("figure :", picture);
                for (let j = 0; j < picture.length; j++) {
                    figure += `<img src='./images/${params.name}/${picture[j].trim()}'>`
                }
                const orderProduct = document.querySelector('.third-flex');

                let addProduct = '';
                let totalPrice = parseInt(goods[i].price.replaceAll(',', '')) * params.ea;
                let totalDiscount = parseInt(goods[i].discount.replaceAll(',', '')) * params.ea;

                addProduct += `
                <div class='third-flex-1'>        
                <div>
                        <li><img src="../images/${params.name}/${picture[0]}" alt=""></li>
                        </div>
                        <div>
                            <p>${goods[i].brand}</p>
                            <p>${goods[i].product_name} <span>| ${params.ea}개</span></p><br>
                            <p>${totalDiscount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}<span>${totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}</span></p>
                        </div>
                        </div>
                        `;
                let allPrice = '';
                allPrice += `
                    <p>총 상품금액</p>
                    <p>+${totalDiscount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}</p>`;


                // console.log(parseInt(goods[i].price.discount.replaceAll(',', '')));
                //parseInt((parseInt(goods[i].price.replaceAll(',', ''))*params.ea).replaceAll(',', ''))+"원".toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                let finalPrice = '';
                finalPrice += `
                <b>최종 주문금액</b>  
                <b>+${(totalDiscount + 3000).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}</b>`;

                orderProduct.innerHTML = addProduct;
                all_price.innerHTML = allPrice;
                final_price.innerHTML = finalPrice;
                break;
            }
        }

    }
} else if (localStorage.getItem('products') != null) {

    let pay = JSON.parse(localStorage.getItem('products'));

    const orderProduct = document.querySelector('.third-flex');
    let addProduct = '';
    let allPrice = '';
    let finalPrice = '';
    let allDiscount = 0;
    let priceAll = 0;
for(i=0;i<pay.length;i++){
    let totalPrice = parseInt(pay[i].price.replaceAll(',', '')) * pay[i].ea;
    let totalDiscount = parseInt(pay[i].discount.replaceAll(',', '')) * pay[i].ea;


    allDiscount=allDiscount+totalDiscount
    priceAll=priceAll+totalPrice;

    addProduct += `
                        <div class='third-flex-1'>
                        <div>
                        <li><img src="../images/${pay[i].name}/${pay[i].product_img}" alt=""></li>
                        </div>
                        <div>
                            <p>${pay[i].brand}</p>
                            <p>${pay[i].product_name} <span>| ${pay[i].ea}개</span></p><br>
                            <p>${totalDiscount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}<span>${totalPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}</span><button class=delete>삭제</button></p>
                        </div>
                        </div>`;

    allPrice = `
                    <p>총 상품금액</p>
                    <p>+${allDiscount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}</p>`;


    // console.log(parseInt(goods[i].price.discount.replaceAll(',', '')));
    //parseInt((parseInt(goods[i].price.replaceAll(',', ''))*params.ea).replaceAll(',', ''))+"원".toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    finalPrice = `
                <b>최종 주문금액</b>  
                <b>${(allDiscount + 3000).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"}</b>`;
                
            }
            

    orderProduct.innerHTML = addProduct;
    all_price.innerHTML = allPrice;
    final_price.innerHTML = finalPrice;

}

const delBtn = document.querySelectorAll('.delete');
    newItem = JSON.parse(localStorage.getItem("products") || "[]");
    delBtn.forEach(function(btn,key){
        btn.onclick = function(){
            newItem.splice(key,1);
            localStorage.setItem("products",JSON.stringify(newItem));
            location.reload()
            if (localStorage.getItem('products') =='[]') {
                localStorage.removeItem('products');
                if (localStorage.getItem('products') == null) {
                    list.innerHTML = '<p class=list_1>장바구니에 담긴 상품이 없습니다.<br>상품을 장바구니에 담아주세요</p>';
                    all_del.style.display='none';
                    buy_btn.style.display='none';
                }
            }
            // list.innerHTML = '<p>삼품없음</p>';
            
        }
    });