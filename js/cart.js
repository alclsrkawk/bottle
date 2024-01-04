const cartBtn = document.querySelector('button');
let item = null;
//상품 받아오기
function getUrlParams() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}
const params = getUrlParams();
let goods = [];


cartBtn.onclick = () => {
    item1 =
        {
            "Idx": 6
            , "name": "soju"
            , "product_name": "asd"
            , "price": "80,000원"
            , "discount": "76,000원"
            , "brand": "시나브로와이너리"
            , "product_img": "wine5.png"
        }

    fnCart(item1)
}
const fnCart = (obj) => {
    let newItem = JSON.parse(localStorage.getItem('products')) || [];
    console.log("newItem :", newItem)

    if (newItem != null) {
        newItem.push(obj)
        localStorage.setItem('products', JSON.stringify(newItem));
    }
    else {
        localStorage.setItem('products', JSON.stringify(obj));
    }

}

if (localStorage.getItem('products') == null) {
    list.innerHTML = '<p>삼품없음</p>';
} else {

    let addList = '';

    let localData = localStorage.getItem('products');

    for (i = 0; i < JSON.parse(localData).length; i++) {
        let localArr = JSON.parse(localData)[i];
        addList += `<div id="list">
            <div class="cart_1">
                <li><img src="../images/${localArr.name}/${localArr.product_img}"></li>
            </div>
            <div class="cart_2">
                <b>${localArr.product_name} <span>${localArr.brand}</span></b><br>
                <p>${localArr.discount}<span>${localArr.price}</span></p>
                <div>
                    수량 : ${localArr.ea}개
                </div>
            <p><button class=delete>삭제</button></p>
            </div>
            
            </div>`
    }
    list.innerHTML = addList;

    const delBtn = document.querySelectorAll('.delete');
    delBtn.forEach(function(btn,key){
        btn.onclick = function(){
            console.log(JSON.parse(localData)[key]);
            //console.log((localStorage.getItem('products'))[key]);
            localStorage.removeItem(JSON.parse(localData)[key]);
        }
    });
}

