function getUrlParams() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}
const params = getUrlParams();
console.log('뭐가!! 넘어오니?', params);

let goods = [], list = '';
// 어디에 담을꺼니 --> 나는 list_items 답을꺼야


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
