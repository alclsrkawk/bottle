const pageLoad = () => {

    const includeHtml = () => {
        const includeTarget = document.querySelectorAll('.includeJs');
        includeTarget.forEach(function (el, idx) {
            const targetFile = el.dataset.includeFile;
            if (targetFile) {
                let xhttp = new XMLHttpRequest();

                xhttp.onreadystatechange = function () {
                    if (this.readyState === XMLHttpRequest.DONE) {
                        this.status === 200 ? (el.innerHTML = this.responseText) : null
                        this.status === 404 ? (el.innerHTML = 'include not found.') : null
                    }
                }
                xhttp.open('GET', targetFile, true);
                xhttp.send();
                return;
            }
        });
    };
    includeHtml();
    window.addEventListener('scroll', function (e) {
        const elMenu = document.querySelector('.main-menu nav');
        const elAref = document.querySelectorAll('.main-menu nav a');
        const elTilte = document.querySelector('.main-title div a');
        const elHeader = document.querySelector('.header-pc');
        // console.log("scrollY :", window.scrollY)

        if (elMenu != null) {
            // console.log(" offsetTop :", elMenu.offsetTop)
            let diff = (window.scrollY - elMenu.offsetTop)

            if (diff >= 400) {
                elHeader.style.cssText = "background:#FFF;";
                elMenu.style.cssText = "border-bottom:1px solid #E0E2E7";
                elTilte.style.cssText = "text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);";
                elAref.forEach(function (element, i) {
                    element.style.cssText = "color:#000;font-weight: 400";
                })

            }
            else {
                elHeader.style.cssText = "background: transparent;"
                elMenu.style.cssText = " border-bottom: 1px solid rgba(255, 255, 255, 0.3);";
                elTilte.style.cssText = "text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);"
                elAref.forEach(function (element, i) {
                    element.style.cssText = "color:#FFF;font-weight: 400";
                })
            }
        }

    });

}

window.onload = pageLoad;

const goSearch = () => {
    const searchText = document.querySelector('.main-title input');
    location.href = `./pages/search.html?stext=${searchText.value}`;
}

const sideMenu = () => {
    //const elBody = document.querySelector('body');
    const elNav = document.querySelector('.toggle nav');
    elNav.classList.toggle('active');
}

const sideClose = () => {
    const elNav = document.querySelector('.toggle nav');
    const elClose = document.querySelector('#p-close');
    elClose.onclick = function () {
        elNav.classList.toggle('active');
    }
}

const jsondata = ['../datas/wine_view.json', '../datas/beer_view.json'
    , '../datas/soju_view.json', '../datas/whisky_view.json'];

let winelist = "", beerlist = "", sojulist = "", whiskylist = "";
let elWine = document.querySelector(`#dv-wine`);
let elBeer = document.querySelector(`#dv-beer`);
let elSoju = document.querySelector(`#dv-soju`);
let elWhisky = document.querySelector(`#dv-whisky`);
const progress = document.querySelectorAll('progress');

const getList = (ctrl, name) => {
    // console.log(wine)
    ctrl.forEach(function (element, i) {
        const picture = element.product_img.split(',')[0];
        if (name === "wine") {
            winelist += `
            <figure class="swiper-slide wine-item">
                <img src="./images/${name}/${picture.trim()}" alt="">
                <figcaption>
                    <p>
                        ${element.brand}
                    </p>
                    <p>
                        ${element.product_name}
                    </p>
                    <p>
                        <span> ${element.discount}</span>
                        <span> ${element.price}</span>
                    </p>
                </figcaption>
            </figure>
        `
        }
        else if (name === "beer") {
            beerlist += `
            <figure class="swiper-slide beer-item">
                <img src="./images/${name}/${picture.trim()}" alt="">
                <figcaption>
                    <p>
                        ${element.brand}
                    </p>
                    <p>
                        ${element.product_name}
                    </p>
                    <p>
                        <span> ${element.discount}</span>
                        <span> ${element.price}</span>
                    </p>
                </figcaption>
            </figure>
        `
        }
        else if (name === "soju") {
            sojulist += `
            <figure class="swiper-slide soju-item">
                <img src="./images/${name}/${picture.trim()}" alt="">
                <figcaption>
                    <p>
                        ${element.brand}
                    </p>
                    <p>
                        ${element.product_name}
                    </p>
                    <p>
                        <span> ${element.discount}</span>
                        <span> ${element.price}</span>
                    </p>
                </figcaption>
            </figure>
        `
        }
        else {
            whiskylist += `
            <figure class="swiper-slide whisky-item">
                <img src="./images/${name}/${picture.trim()}" alt="">
                <figcaption>
                    <p>
                        ${element.brand}
                    </p>
                    <p>
                        ${element.product_name}
                    </p>
                    <p>
                        <span> ${element.discount}</span>
                        <span> ${element.price}</span>
                    </p>
                </figcaption>
            </figure>
        `
        }
    });

    switch (name) {
        case "wine":
            elWine.innerHTML = winelist;
            pageLink(ctrl, name, document.querySelectorAll(".wine-item"));
            break;
        case "beer":
            elBeer.innerHTML = beerlist;
            pageLink(ctrl, name, document.querySelectorAll(".beer-item"));
            break;
        case "soju":
            elSoju.innerHTML = sojulist;
            pageLink(ctrl, name, document.querySelectorAll(".soju-item"));
            break;
        default:
            elWhisky.innerHTML = whiskylist;
            pageLink(ctrl, name, document.querySelectorAll(".whisky-item"))
            break;
    }
}
const pageLink = (ctrl, cate, link) => {
    link.forEach(function (element, i) {
        element.onclick = function () {
            location.href = `./pages/view.html?idx=${ctrl[i].Idx}&name=${cate}`;
        }
    })
}
const fetchData = (data, name) => {
    fetch(data)
        .then(type => type.json())
        .then(result => {
            getList(result.data, name);
        }).catch(error => {
            console.log(error);
        });
}

const getData = () => {
    fetchData('../datas/wine_view.json', "wine");
    // fetchData(jsondata[0], "wine");
    // fetchData(jsondata[1], "beer");
    // fetchData(jsondata[2], "soju");
    // fetchData(jsondata[3], "whisky");
}
getData();
var swiper1 = new Swiper(".banner", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
});
swiper1.on('transitionEnd', function () {
    // console.log('now index :::', swiper1.realIndex);
    switch (swiper1.realIndex) {
        case 0: progress[0].value = 25; break;
        case 1: progress[1].value = 50; break;
        case 2: progress[2].value = 75; break;
        case 3: progress[3].value = 100; break;
    }
});
let pageviw = 2;
// window.addEventListener("load", (event) => {
//     const isMobile = window.matchMedia('(max-width: 390px)');
//     const isPad = window.matchMedia('(min-width:600px) and (max-width:768px)');
//     const isPC = window.matchMedia('(min-width: 1024px)');
//     // let line = "";
//     console.log("mobile :", isMobile.matches)
//     console.log("pad :", isPad.matches)
//     console.log("pc :", isPC.matches)

//     if (isMobile.matches) pageviw = 2;
//     else if (isPad.matches) pageviw = 3;
//     else pageviw = 4;
//     goSwiper(pageviw);
// });
// const changeHandler = (e) => {
//     console.log('390px changed!');
//     goSwiper(2);

// }
// const changePadHandler = (e) => {
//     console.log('600px changed!');
//     goSwiper(3);
// }

// const changeOtherHandler = (e) => {
//     console.log('1024px changed!');
//     goSwiper(4);
// }
const goSwiper = (page) => {
    new Swiper(".wine-l", {
        slidesPerView: page,
        spaceBetween: page,
        breakpoints: {
            360: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });

    new Swiper(".beer-l", {
        slidesPerView: page,
        spaceBetween: page,// == 2 ? 10 : 20,
        breakpoints: {
            360: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });

    new Swiper(".soju-l", {
        slidesPerView: page,
        spaceBetween: page,
        breakpoints: {
            360: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });

    new Swiper(".whisky-l", {
        slidesPerView: page,
        spaceBetween: page,
        breakpoints: {
            360: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        }
    });
}
goSwiper(pageviw);

// const mediaQueryMobile = window.matchMedia('(max-width: 390px)');
// const mediaQueryPad = window.matchMedia('(min-width:600px) and (max-width:768px)');
// const mediaQueryOther = window.matchMedia('(min-width:1024px)');
// mediaQueryMobile.addEventListener('change', changeHandler);
// mediaQueryPad.addEventListener('change', changePadHandler);
// mediaQueryOther.addEventListener('change', changeOtherHandler);
var sw = 0;
$('._pause').click(function () {
    if (sw == 0) {
        $('._pause').addClass('on');
        swiper1.autoplay.stop();
        sw = 1;
    } else {
        $('._pause').removeClass('on');
        swiper1.autoplay.start();
        sw = 0;
    }
});
