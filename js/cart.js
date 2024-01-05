const cartBtn = document.querySelector('button');

if (localStorage.getItem('products') == null) {
    list.innerHTML = '<p class=list_1>장바구니에 담긴 상품이 없습니다.<br>상품을 장바구니에 담아주세요</p>';
    all_del.style.display='none';
    buy_btn.style.display='none';
} else {

    let addList = '';

    let localData = localStorage.getItem('products');

    for (i = 0; i < JSON.parse(localData).length; i++) {
        let localArr = JSON.parse(localData)[i];
        let disCount =  (parseInt(localArr.discount.replaceAll(',', '')))*localArr.ea;
        let price = (parseInt(localArr.price.replaceAll(',', '')))*localArr.ea;
        // console.log(parseInt(localArr.discount.replaceAll(',', '')))
        // console.log(localArr.ea)
        addList += `<div id=list2>
            <div class="cart_1">
                <li><img src="../images/${localArr.name}/${localArr.product_img}"></li>
            </div>
            <div class="cart_2">
                <b><span>${localArr.brand}</span><br>${localArr.product_name}</b>
                <div id=count>
                    수량 : ${localArr.ea}개
                </div>
            <p>${disCount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+"원"} <span>${price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+"원"}</span><button class=delete>삭제</button></p>
            </div>
            
            </div>
            `
    }
    list.innerHTML = addList;

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
    all_del.onclick = function(){
        localStorage.removeItem('products');
        location.reload()
        if (localStorage.getItem('products') == null) {
            list.innerHTML = '<p class=list_1>장바구니에 담긴 상품이 없습니다.<br>상품을 장바구니에 담아주세요</p>';
            all_del.style.display='none';
            buy_btn.style.display='none';
        }
    }
    const elGoodSum1 = document.querySelector('.goodssum1');

/* <div class="btn_buy1">
            <p>총 합계 금액<b class="goodssum1"></b></p>
            <div id="button2_location">
                <a id="location1" href="#"><input class="button2" type="button" value="구매하기"></a>
            </div>
        </div> */

        let sum = 0;
        // console.log(JSON.parse(localStorage.getItem('products')))
        let product = JSON.parse(localStorage.getItem('products'))
        for(i=0;i<product.length;i++){
        let disc = parseInt(product[i].discount.replaceAll(',', ''));
        let ea = (product[i].ea);
        let total = disc*ea;
        sum = sum+total;
        
        }

    elGoodSum1.innerHTML = sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")+"원";

    
    
    
}

