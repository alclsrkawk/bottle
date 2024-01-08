const elementBtn = document.querySelector('.search-result div button');
const elementInput = document.querySelector('.search-result div input');

function getUrlParams() {
    const params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value; });
    return params;
}
const params = getUrlParams();

const fnSearch = (text) => {
    if (text.length > 1) {
        const data = "../datas/goods.json";
        let data_list = document.querySelector(`.search-list`);
        let list = "";

        fetch(data)
            .then(type => type.json())
            .then(result => {
                let search = [];
                data_list.innerHTML = "";
                for (let i = 0; i < result.data.length; i++) {
                    if (result.data[i].product_name.includes(text)
                        || result.data[i].brand.includes(text)) {
                        search.push(result.data)
                        // console.log("search", search)
                        const picture = result.data[i].product_img.split(',')[0];
                        list += `
                            <figure class="search-item" data-idx="${result.data[i].Idx}" data-name="${result.data[i].name}">
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
                        data_list.innerHTML = list;
                    }
                }
                fnLocation();
                const searchText = document.querySelector('.search-text'),
                    searchLength = document.querySelector('.search-length');
                searchText.innerText = `'${elementInput.value}'`;
                searchLength.innerText = `(${search.length})`;
            }).catch(error => {
                console.log(error);
            });
    } else {
        swalMsg(4, "오류", "검색어를 2글자 이상 입력해주세요.")
    }
}

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
  const firstTab = document.querySelector('.search');
  window.addEventListener("scroll", function () {
    if (firstTab.getBoundingClientRect().y <= 0) {
      up.style = "transform: translateY(-50px)";
      down.style = "transform: translateY(-50px)";
    } else {
      up.style = "transform: translateY(150px)";
      down.style = "transform: translateY(150px)";
    }
  });

// 클릭시 상세로 이동
let fnLocation = () => {
    const searchItem = document.querySelectorAll('.search-item');
    searchItem.forEach(function (element, i) {
        element.onclick = function () {
            location.href = `./view.html?idx=${element.dataset.idx}&name=${element.dataset.name}`;
        }
    });
}

//리스트, 메인 페이지 에서 검색해서 들어오는 경우
if (params.stext != "") {
    let value = params.stext != undefined ? decodeURI(params.stext) : "";
    if (value != "") {
        elementInput.value = value;
        fnSearch(elementInput.value);
        // console.log("params start :", elementInput.value)
    }
}

//사용자가 직접 검색
elementBtn.onclick = () => {
    if (elementInput.value.length > 1) {
        fnSearch(elementInput.value);
        console.log("value is ", elementInput.value)
    } else {
        swalMsg(4, "오류", "검색어를 2글자 이상 입력해주세요.")
    }
}