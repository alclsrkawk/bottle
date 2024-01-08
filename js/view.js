
// list에서 클릭한 데이터 값 받아오기
function getUrlParams() {
  const params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
  return params;
}
const params = getUrlParams();
// console.log("view :", params);

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

const elImg = document.querySelector('.view_img_1'),
  elViewText1 = document.querySelector('.view_text_1'),
  elViewText2 = document.querySelector('.view_text_2'),
  elTextBox = document.querySelector('.text_box'),
  elExImg = document.querySelector('.img_ex'),
  elGoodsImg = document.querySelector('.goods_img'),
  elGoodInfo2 = document.querySelector('.goods_info2'),
  elMText1 = document.querySelector('.m_text1'),
  elMPrice1 = document.querySelector('.m_price1');

// console.log(elGoodInfo2);


let goodsView = function () {
  // console.log("goods :", goods[1])
  // console.log(params.idx)
  // console.log(goods[1])

  let figure = '';
  let a = '';
  let b = '';
  let c = '';
  let d = '';
  let e = '';
  let g = '';
  let h = '';
  let l = '';
  let m = '';
  for (let i = 0; i < goods.length; i++) {
    if (goods[i].Idx == params.idx) {
      const picture = goods[i].product_img.split(',');
      for (let j = 0; j < picture.length; j++) {
        figure += `<img src="../images/${params.name}/${picture[j]}" alt=""></img>`
      }

      a += `<img class="view_main_img" src="../images/${params.name}/${picture[0]}" alt="">
    <div class="view_sub_image">
    ${figure}
    </div>`;

      b += `<p>${goods[i].brand}</p>
        <p id="goods_name">${goods[i].product_name}</p>
        <p id="line"></p>`

      c += `<p id="sale">${goods[i].price}</p>
            <p><b>${goods[i].discount}</b></p>
            <p>${goods[i].limit}</p>
            <p>${goods[i].delivery_fee}</p>
            <p>${goods[i].brand}</p>`

      d += `<p>${goods[i].product_name}</p><br>
            <p></p>
            <div id="text2">
            <input class= "input_text" type="number" min="0" value="1">
            <p> ${goods[i].discount}</p>
            </div>`

      e += `<img src="../images/${params.name}/${goods[i].explain}" alt="">`

      g += `<p class="goods_img"><img src="../images/${params.name}/${picture[0]}" alt=""></p>`

      h += `<span>${goods[i].brand}</span>
            <p>${goods[i].product_name}</p>`

      l += `<p>${goods[i].product_name}</p>`

      m += `${goods[i].discount}`

    }

  }

  elImg.innerHTML = a;
  elViewText1.innerHTML = b;
  elViewText2.innerHTML = c;
  elTextBox.innerHTML = d;
  elExImg.innerHTML = e;
  elGoodsImg.innerHTML = g;
  elGoodInfo2.innerHTML = h;
  elMText1.innerHTML = l;
  elMPrice1.innerHTML = m;

  up.onclick = function () {
    window.scrollTo({
      top: 0,
      bottom: 100000,
      behavior: "smooth"
    });

  }
  down.onclick = function () {
    window.scrollTo({
      top: 100000,
      bottom: 0,
      behavior: "smooth"
    });
  }
  const firstTab = document.querySelector('.view_1');
  window.addEventListener("scroll", function () {
    if (firstTab.getBoundingClientRect().y <= 0) {
      up.style = "transform: translateY(-50px)";
      down.style = "transform: translateY(-50px)";
    } else {
      up.style = "transform: translateY(150px)";
      down.style = "transform: translateY(150px)";
    }
  });



  const elMainImg = document.querySelector('.view_main_img'),
    elSubImg = document.querySelectorAll('.view_sub_image img'),
    elExpand = document.querySelector('.expand'),
    elFold = document.querySelector('.fold'),
    elInputText = document.querySelector('.input_text'),
    elLocation = document.querySelector('.location'),
    elCart = document.querySelector('.cart'),
    elGoodsExLine = document.querySelector('.goods_ex_line'),
    elGoodsReviewLine = document.querySelector('.goods_review_line'),
    elGoodsEx = document.querySelector('.img_ex_text'),
    elMDownUp = document.querySelector('.m_down_up'),
    elMCart = document.querySelector('.m_cart'),
    elMBuy = document.querySelector('.m_buy_all'),
    elMValueDonw = document.querySelector('.m_valuedown'),
    elMValueUp = document.querySelector('.m_valueup'),
    elMInputText = document.querySelector('.m_input_text'),
    elMLocation = document.querySelector('.m_location'),
    elMGoodsSum = document.querySelector('.m_goodssum'),
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

  elGoodsExLine.onclick = function (e) {
    e.preventDefault();
    elGoodsEx.style.display = 'flex';
    elReview.style.display = 'none';
    elGoodsExLine.classList.remove('active');
    elGoodsReviewLine.classList.remove('active');
  }

  elGoodsReviewLine.onclick = function (e) {
    console.log('ddsa')
    e.preventDefault();
    elGoodsEx.style.display = 'none';
    elReview.style.display = 'block';
    elGoodsExLine.classList.add('active');
    elGoodsReviewLine.classList.add('active');
  }

  elMDownUp.onclick = function () {
    console.log('dsadsa')
    elMBuy.classList.toggle('active');
    elMDownUp.classList.toggle('active');
  }

  function inputText() {
    // console.log(elInputText.value)
    let TransNum = parseInt(goods[params.idx - 1].discount.replaceAll(',', ''));
    let goodsSum = (elInputText.value * TransNum).toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;
      if(elInputText.value == 0){
        swalMsg(0, "수량 오류", "최소 수량은 1개입니다.");
        elInputText.value++
      }else{
        let f = ''
        f += `<p>총 합계 금액 <b id ='Sum'>${goodsSum}원</b></p>`;
        text3.innerHTML = f;
      }


  }
  elInputText.oninput = inputText;

  inputText();

  elMValueDonw.onclick = function () {
    if(elMInputText.value == 1){
      swalMsg(0, "수량 오류", "최소 수량은 1개입니다.");
    }else{
      elMInputText.value--
      changeInput();
    }
  }

  elMValueUp.onclick = function () {
    elMInputText.value++;
    changeInput();
  }


  const changeInput = () => {
    // console.log(elMInputText.value)
    let TransNum1 = parseInt(goods[params.idx - 1].discount.replaceAll(',', ''));
    let goodsSum1 = (elMInputText.value * TransNum1).toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;
    let k = ''
    k += ` ${goodsSum1}원`;
    elMGoodsSum.innerHTML = k;
  }

  elMInputText.oninput = changeInput;
  changeInput()

  elLocation.onclick = function (e) {

    e.preventDefault()

    if (elInputText.value == '' | elInputText.value == 0) {
      swalMsg(0, "수량 선택", "최소 1개의 수량을 선택해주세요.");
    } else {
      location.href = `./payment.html?idx=${params.idx}&name=${params.name}&ea=${elInputText.value}`;
    }

  }

  elMLocation.onclick = function (e) {

    e.preventDefault()

    if (elMInputText.value == '' | elMInputText.value == 0) {
      swalMsg(0, "수량 선택", "최소 1개의 수량을 선택해주세요.");
    } else {
      location.href = `./payment.html?idx=${params.idx}&name=${params.name}&ea=${elMInputText.value}`;
    }

  }

  let item1 = null;
  let AB = params.idx - 1
  const picture1 = goods[AB].product_img.split(',');
  elCart.onclick = function () {
    // console.log(goods[AB].value)
    if (elInputText.value == 0 || elInputText.value == '') {
      swalMsg(0, "수량 선택", "최소 1개의 수량을 선택해주세요.");
    } else {
      item1 =
      {
        "Idx": AB
        , "name": params.name
        , "product_name": goods[AB].product_name
        , "price": goods[AB].price
        , "discount": goods[AB].discount
        , "product_img": picture1[0]
        , "brand": goods[AB].brand
        , "ea": elInputText.value
      }
      fnCart(item1)
      swalMsg(1, "장바구니", "장바구니에 저장되었습니다.");
    }

  }

  let item2 = null;
  let AB2 = params.idx - 1
  const picture2 = goods[AB].product_img.split(',');
  elMCart.onclick = function () {
    // console.log(goods[AB2].value)
    if (elMInputText.value == 0 || elMInputText.value == '') {
      swalMsg(0, "수량 선택", "최소 1개의 수량을 선택해주세요.");
    } else {
      item2 =
      {
        "Idx": AB2
        , "name": params.name
        , "product_name": goods[AB2].product_name
        , "price": goods[AB2].price
        , "discount": goods[AB2].discount
        , "product_img": picture1[0]
        , "brand": goods[AB2].brand
        , "ea": elMInputText.value
      }
      fnCart(item2)
      swalMsg(1, "장바구니", "장바구니에 저장되었습니다.");
    }

  }

  //장바구니 저장 
  const fnCart = (obj) => {
    let newItem = JSON.parse(localStorage.getItem('products')) || [];

    // console.log("newItem :", newItem)
    if (newItem != null) {
      newItem.push(obj)
      localStorage.setItem('products', JSON.stringify(newItem));

    }
    else {
      localStorage.setItem('products', JSON.stringify(obj));
    }
    // console.log(localStorage.getItem('products'))
  }
  let ABC = JSON.parse(localStorage.getItem('products'));
  // console.log(ABC[0])
}