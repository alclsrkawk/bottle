function getUrlParams() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}
const params = getUrlParams();
console.log('뭐가!! 넘어오니?', params);


//////best5_slide 
let best5 = [], bestList;

const bestData=`../datas/${params.name}_view.json`
fetch(bestData)
    .then(type=>type.json())
    .then(result=>{
        best5=result.data;
        console.log(result)
        bestList();
    }).catch(error=>{
        console.log(error);
    });

 bestList=()=>{
    let elBest = document.querySelector('.best5_slide > div');


    for(let i=0;i<5;i++){
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

    elBest.innerHTML=list;

    var swiper = new Swiper(".best5_slide", {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
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
    list='';
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




