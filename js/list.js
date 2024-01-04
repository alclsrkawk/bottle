//-------------------주소값 가져오기
function getUrlParams() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}
const params = getUrlParams();




let best5 = [], bestList;

const bestData = `../datas/${params.name}_view.json`
fetch(bestData)
    .then(type => type.json())
    .then(result => {
        best5 = result.data;
        bestList();
    }).catch(error => {
        console.log(error);
    });




//-------------------리스트 배경 및 타이틀 불러오기
bestList = () => {
    let elBest = document.querySelector('.best5_slide > div');

    let elListBg = document.querySelector('.list_bg  img');
    let elListTitle = document.querySelector('.list_title > h2');

    if (params.name == 'wine') {
        elListBg.setAttribute("src", "../images/list_bg/1.png");
        elListTitle.innerHTML = `분위기 있는 와인`
    } else if (params.name == 'beer') {
        elListBg.setAttribute("src", "../images/list_bg/2.png");
        elListTitle.innerHTML = `즐겨 마시는 맥주`
    } else if (params.name == 'soju') {
        elListBg.setAttribute("src", "../images/list_bg/3.png");
        elListTitle.innerHTML = `늘 한결같은 소주`
    } else {
        elListBg.setAttribute("src", "../images/list_bg/4.png");
        elListTitle.innerHTML = `홀리데이 위스키`
    }




    //-------------------베스트5 데이터 불러오기
    for (let i = 0; i < 5; i++) {
        const bestPicture = best5[i].product_img.split(',')[0];

        list += `
                    
                    <figure class="swiper-slide">
                        <a href="./view.html?name=${params.name}&idx=${best5[i].Idx}">
                            <span>TOP</span>
                            <p><img src='../images/${params.name}/${bestPicture}' alt=''></p>
                            <figcaption>
                                <small>${best5[i].brand}</small>
                                <p>${best5[i].product_name}</p>
                                <p>
                                ${best5[i].discount}
                                </p>
                                <del>${best5[i].price}</del>
                            </figcaption>
                        </a>
                    </figure>
                   
                    
                `
    }


    //-------------------베스트5 슬라이드 동작
    elBest.innerHTML = list;

    var swiper = new Swiper(".best5_slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });

    list = "";
    let ellink = document.querySelectorAll('figure');
    ellink.forEach(function (element, i) {
        element.onclick = function () {
            console.log(goods[i].Idx)
            // selectBox[0].selected = true;
            location.href = `./view.html?idx=${goods[i].Idx}&name=${params.name}`;
        }
    })

}



//-------------------list 12개 데이터 가져오기

let goods = [], list = '';

const data = `../datas/${params.name}_view.json`;
fetch(data)
    .then(type => type.json())
    .then(result => {
        goods = result.data;
        goodsList();

    }).catch(error => {
        console.log(error);
    });

const goodsList = () => {
    let elList = document.querySelector('.list_items');
    list = '';
    goods.forEach(function (element, i) {
        const picture = element.product_img.split(',')[0];


        list += `
                    <figure>
                        <a href="./view.html?name=${params.name}&idx=${best5[i].Idx}">
                        <p><img src='../images/${params.name}/${picture}' alt=''></p>
                        <figcaption>
                            <small>${element.brand}</small>
                            <p>${element.product_name}</p>
                            <p>
                            ${element.discount} <del>${element.price}</del>
                            </p>
                        </figcaption>
                        </a>
                    </figure>
               `
    });

    elList.innerHTML = list;
    // console.log(list)
}




//-------------------스크롤(up&down) 버튼 동작
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
const firstTab = document.querySelector('.list');

window.addEventListener("scroll", function () {
    if (firstTab.getBoundingClientRect().y <= 0) {
        up.style = "transform: translateY(-50px)";
        down.style = "transform: translateY(-50px)";
    } else {
        up.style = "transform: translateY(150px)";
        down.style = "transform: translateY(150px)";
    }
});




//-------------------연령 확인 팝업창 
const elPopBg = document.querySelector('.popup_bg'),
    elPopUp = document.querySelector('.pop_up'),
    elBtnYes = document.querySelector('.btn_yes'),
    elBtnNo = document.querySelector('.btn_no');

elBtnYes.addEventListener('click', () => {
    let date = new Date();
    date.setDate(date.getDate() + 1)
    date = date.toUTCString();
    document.cookie = "popup=age_check; expires=" + date;
    console.log(date);

    elPopUp.style.display = 'none';
    elPopBg.style.display = 'none';

});

if (document.cookie.match('age_check')) {
    elPopUp.style.display = 'none';
} else {
    elPopUp.style.display = 'block';
}



elBtnNo.addEventListener('click', () => {
    swalMsg(4, "19세 미만", "사이트 이용이 불가능 합니다.")
})



//-------------------출생년도 셀렉트 박스 

const elSel = document.querySelector('.select'),
      elYear = document.querySelector('#year'),
      elMonth = document.querySelector('#month'),
      elDay = document.querySelector('#day');
   
      isYearOptionExisted = false;
      elYear.addEventListener('focus', function () {
       
        if(!isYearOptionExisted) {
          isYearOptionExisted = true
          for(var i = 1930; i <= 2024; i++) {
           
            const YearOption = document.createElement('option')
            YearOption.setAttribute('value', i)
            YearOption.innerText = i
        
            this.appendChild(YearOption);
          }
        }
      });


      isMonthOptionExisted = false;
      elMonth.addEventListener('focus', function () {
       
        if(!isMonthOptionExisted) {
          isMonthOptionExisted = true
          for(var i = 1; i <= 12; i++) {
           
            const MonthOption = document.createElement('option')
            MonthOption.setAttribute('value', i)
            MonthOption.innerText = i
        
            this.appendChild(MonthOption);
          }
        }
      });


      isDayOptionExisted = false;
      elDay.addEventListener('focus', function () {
       
        if(!isDayOptionExisted) {
          isDayOptionExisted = true
          for(var i = 1; i <= 31; i++) {
           
            const DayOption = document.createElement('option')
            DayOption.setAttribute('value', i)
            DayOption.innerText = i
        
            this.appendChild(DayOption);
          }
        }
      });