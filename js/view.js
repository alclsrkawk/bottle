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
  elGoodInfo2 = document.querySelector('.goods_info2');

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
            <input class= "input_text" type="number" min="0" placeholder="0">
            <p> ${goods[i].discount}</p>
            </div>`

      e += `<img src="../images/${params.name}/${goods[i].explain}" alt="">`

      g += `<p class="goods_img"><img src="../images/${params.name}/${picture[0]}" alt=""></p>`
  
      h += `<span>${goods[i].brand}</span>
            <p>${goods[i].product_name}</p>`

    }

  }

  elImg.innerHTML = a;
  elViewText1.innerHTML = b;
  elViewText2.innerHTML = c;
  elTextBox.innerHTML = d;
  elExImg.innerHTML = e;
  elGoodsImg.innerHTML = g;
  elGoodInfo2.innerHTML = h;


  const elMainImg = document.querySelector('.view_main_img'),
    elSubImg = document.querySelectorAll('.view_sub_image img'),
    elExpand = document.querySelector('.expand'),
    elFold = document.querySelector('.fold'),
    elInputText = document.querySelector('.input_text'),
    elLocation = document.querySelector('.location'),
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

  elInputText.onclick = function () {

    // console.log(parseInt(z.discount.replaceAll(',', '')));
    // parseInt 정수만 나오게 replaceAll(',','') ,지우기
    // console.log('asd')
    let TransNum = parseInt(goods[params.idx - 1].discount.replaceAll(',', ''));
    let goodsSum = (elInputText.value * TransNum).toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");;
    let f = ''
    f += `<p>총 합계 금액 <b id ='Sum'>${goodsSum}원</b></p>`;
    text3.innerHTML = f;
    // console.log(Sum.innerText)

}

  elLocation.onclick = function (e) {

    e.preventDefault()

    if (elInputText.value == '' | elInputText.value == 0) {
      alert('최소 1개는 선택해주세요');
    } else {
      location.href = `./payment.html?idx=${params.idx}&name=${params.name}`;
    }

  }
}