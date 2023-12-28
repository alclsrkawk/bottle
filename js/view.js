// list에서 클릭한 데이터 값 받아오기
// function getUrlParams() {
//   const params = {};
//   window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
//   return params;
// }
// const params = getUrlParams();
// console.log("view :" , params);

  let goods = [];
  const url = `../datas/beer_view.json`;
  fetch(url)
    .then(type => type.json())
    .then(result => {
      goods = result.data;
      goodsView();
    }).catch(error => {
      // console.log(error);
    });

    const elImg = document.querySelector('.view_img_1'),
    elViewText1 = document.querySelector('.view_text_1'),
    elViewText2 = document.querySelector('.view_text_2'),
    elTextBox = document.querySelector('.text_box'),
    elExImg = document.querySelector('.img_ex');
    

  let goodsView = function () {

    let figure = '';
    let a = '';
    let b = '';
    let c = '';
    let d = '';
    let e = '';
    let z = goods[0];
    const picture = z.product_img.split(',');
    for (j = 0; j < picture.length; j++) {
      figure += `<img src="../images/beer/${picture[j]}" alt=""></img>`
    }


    a += `<img class="view_main_img" src="../images/beer/${picture[0]}" alt="">
    <div class="view_sub_image">
    ${figure}
    </div>`;

    b += `<p>${z.brand}</p>
        <p id="goods_name">${z.product_name}</p>
        <p id="line"></p>`

    c += `<p id="sale">${z.price}</p>
            <p><b>${z.discount}</b></p>
            <p>${z.limit}</p>
            <p>${z.delivery_fee}</p>
            <p>${z.brand}</p>`

    d += `<p>${z.product_name}</p><br>
            <p></p>
            <div id="text2">
            <input class= "input_text" type="number" min="0" placeholder="0">
            <p> ${z.discount}</p>
            </div>`

    e += `
    <img src="../images/beer/${z.explain}" alt="">`

    elImg.innerHTML = a;
    elViewText1.innerHTML = b;
    elViewText2.innerHTML = c;
    elTextBox.innerHTML = d;
    elExImg.innerHTML = e;


    const elMainImg = document.querySelector('.view_main_img'),
    elSubImg = document.querySelectorAll('.view_sub_image img'),
    elExpand = document.querySelector('.expand'),
    elFold = document.querySelector('.fold'),
    elInputText = document.querySelector('.input_text'),
    elBtnBuy = document.querySelector('.btn_buy'),
    elGoodsExLine = document.querySelector('.goods_ex_line'),
    elGoodsReviewLine = document.querySelector('.goods_review_line'),
    elGoodsEx = document.querySelector('.img_ex_text'),
    elReview = document.querySelector('section');

    elExpand.onclick = function (e) {
      e.preventDefault();
      elExpand.style.display = 'none';
      elFold.style.display = 'block';
      elExImg.style.height = 'auto';
  
    }
  
    elFold.onclick = function (e) {
      e.preventDefault();
      elExpand.style.display = 'block';
      elFold.style.display = 'none';
      elExImg.style.height = '2051px';
  
    }

    elSubImg.forEach(function (값, 키) {
      값.onclick = function () {
        let g = 값.getAttribute('src');
        elMainImg.setAttribute('src', g);
      }
  
    })

    elInputText.onclick = function () {

      // console.log(parseInt(z.discount.replaceAll(',', '')));
      // parseInt 정수만 나오게 replaceAll(',','') ,지우기
      let TransNum = parseInt(z.discount.replaceAll(',', ''));
      let goodsSum = (elInputText.value * TransNum).toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;
      let f = ''
      f += `<p>총 합계 금액 <b>${goodsSum}원</b></p>`
      text3.innerHTML = f;
      
    }

    elGoodsExLine.onclick = function(e){
      e.preventDefault();
      elGoodsEx.style.display = 'flex';
      elReview.style.display = 'none';
      elGoodsExLine.classList.remove('active');
      elGoodsReviewLine.classList.remove('active');
    }

    elGoodsReviewLine.onclick = function(e){
      e.preventDefault();
      elGoodsEx.style.display = 'none';
      elReview.style.display = 'block';
      elGoodsExLine.classList.add('active');
      elGoodsReviewLine.classList.add('active');
    }

    
  }

  

  

  

  

  

  







