// list에서 클릭한 데이터 값 받아오기
function getUrlParams() {
  const params = {};
  window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
  return params;
}
const params = getUrlParams();
console.log("view :" , params);

// const getMethod = () => {
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
    elExImg = document.querySelector('.img_ex');



  let goodsView = function () {

    let figure = '';
    let a = '';
    let b = '';
    let c = '';
    let d = '';
    let e = '';
    const picture = z.product_img.split(',');
    for (j = 0; j < picture.length; j++) {
      figure += `<img src="../images/${params.name}/${picture[j]}" alt=""></img>`
    }


    a += `<img class="view_main_img" src="../images/${params.name}/${picture[0]}" alt="">
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
    <img src="../images/beer/${z.explain}" alt="">
    `

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
      elButton = document.querySelector('.button1');


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

    elButton.onclick = function (e) {
      e.preventDefault()
      console.log(elInputText.value)
      console.log(z.explain)
    }

    // 이름, 이미지, 브랜드
    // 할인가, 판매가





  }
// }








