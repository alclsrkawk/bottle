function getUrlParams() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}
const params = getUrlParams();
console.log('뭐가!! 넘어오니?', params);



let best5 = [], bestList;

const bestData = `../datas/${params.name}_view.json`
fetch(bestData)
    .then(type => type.json())
    .then(result => {
        best5 = result.data;
        console.log(result)
        bestList();
    }).catch(error => {
        console.log(error);
    });


bestList = () => {
    let elBest = document.querySelector('.best5_slide > div');

    let elListBg = document.querySelector('.list_bg  img');
    let elListTitle = document.querySelector('.list_title > h2');
    
    if (params.name == 'wine') {
        elListBg.setAttribute("src", "../images/list_bg/list_bg_wine.png");
        elListTitle.innerHTML=`분위기 있는 와인`
    } else if (params.name == 'beer') {
        elListBg.setAttribute("src", "../images/list_bg/list_bg_beer.png");
        elListTitle.innerHTML=`즐겨 마시는 맥주`
    } else if (params.name == 'soju') {
        elListBg.setAttribute("src", "../images/list_bg/list_bg_soju.png");
        elListTitle.innerHTML=`늘 한결같은 소주`
    } else {
        elListBg.setAttribute("src", "../images/list_bg/list_bg_whisky.png");
        elListTitle.innerHTML=`홀리데이 위스키`
    }

    
   

    for (let i = 0; i < 5; i++) {
        const bestPicture = best5[i].product_img.split(',')[0];

        list += `
                    
                    <figure class="swiper-slide">
                        <span>TOP</span>
                        <p><img src='../images/${params.name}/${bestPicture}' alt=''></p>
                        <figcaption>
                            <small>${best5[i].brand}</small>
                            <p>${best5[i].product_name}</p>
                            <p>
                            ${best5[i].price}
                            </p>
                            <del>${best5[i].discount}</del>
                        </figcaption>
                    </figure>
                   
                    
                `
    }

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
    });

}






//////////////list 12개 

let goods = [], list = '';
// 어디에 담을꺼니 --> 나는 list_items 담을꺼야


//예) name 으로 넘어오네 wine 이

//어떻게 담을꺼니? fetch?

//wine json  찾아 볼까
const data = `../datas/${params.name}_view.json`;
fetch(data)
    .then(type => type.json())
    .then(result => {
        goods = result.data;
        console.log(result)
        goodsList();

    }).catch(error => {
        console.log(error);
    });

const goodsList = () => {
    console.log("나는 리스트", goods)
    let elList = document.querySelector('.list_items');
    list = '';
    goods.forEach(function (element, i) {
        const picture = element.product_img.split(',')[0];
        //무조건 한놈만 가져온다
        // console.log(element.product_img)

        list += `
                    <figure>
                        <p><img src='../images/${params.name}/${picture}' alt=''></p>
                        <figcaption>
                            <small>${element.brand}</small>
                            <p>${element.product_name}</p>
                            <p>
                            ${element.price} <del>${element.discount}</del>
                            </p>
                        </figcaption>
                    </figure>
               `
    });

    elList.innerHTML = list;
    // console.log(list)
}