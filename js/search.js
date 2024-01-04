const elementBtn = document.querySelector('.search-result div button');
const elementInput = document.querySelector('.search-result div input');

function getUrlParams() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}
const params = getUrlParams();

const fnSearch = (text) => {
    const data = "../datas/goods.json";
    let data_list = document.querySelector(`.search-list`);
    let list = "";
    fetch(data)
        .then(type => type.json())
        .then(result => {
            let search = [];
            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].product_name.includes(text)
                    || result.data[i].brand.includes(text)) {
                    search.push(result.data)
                    // console.log("search", search)
                    const picture = result.data[i].product_img.split(',')[0];
                    list += `
                            <figure class="search-item">
                                <img src="../images/${result.data[i].name}/${picture.trim()}" alt="">
                                <figcaption>
                                    <p>
                                        ${result.data[i].brand}
                                    </p>
                                    <p>
                                        ${result.data[i].product_name}
                                    </p>
                                    <p>
                                        <span> ${result.data[i].discount}</span>
                                        <span> ${result.data[i].price}</span>
                                    </p>
                                </figcaption>
                            </figure>
                        `
                }
                data_list.innerHTML = list;
            }

            const searchText = document.querySelector('.search-text'),
                searchLength = document.querySelector('.search-length');
            searchText.innerText = `'${elementInput.value}'`;
            searchLength.innerText = `(${search.length})`;
        }).catch(error => {
            console.log(error);
        });
}

// 클릭시 상세로 이동
let fnLocation = () => {
    const searchItem = document.querySelectorAll('.search-item');
    searchItem.forEach(element => {
        element.onclick = () => {
            console.log(element)
        }
    });
}

//리스트, 메인 페이지 에서 검색해서 들어오는 경우
if (params.stext != "") {
    let value = params.stext != undefined ? decodeURI(params.stext) : "";
    if (value != "") {
        elementInput.value = value;
        fnSearch(elementInput.value);
        fnLocation();
    }
}

//사용자가 직접 검색
elementBtn.onclick = () => {
    fnSearch(elementInput.value);
    fnLocation();
}