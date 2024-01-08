const pageLoad = () => {

    function includeHtml() {
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
        // const elListPage = document.querySelector('.list_bg');
        // const elPaymentPage = document.querySelector('.section_div');
        const mobileHeader = document.querySelector('.header-m');


        if (elMenu != null) {
            let diff = null;
            // if (elPaymentPage != null) {
            //     diff = elPaymentPage.offsetTop <= window.scrollY;
            // }
            // else if (elListPage != null) {
            //     diff = elListPage.offsetTop <= window.scrollY;
            // }
            // else {
            //     diff = (window.scrollY - elMenu.offsetTop) >= -100;
            // }

            diff = (window.scrollY - elMenu.offsetTop) >= -100;
            if (diff) {
                elHeader.style.cssText = "background:#FFF;";
                elMenu.style.cssText = "border-bottom:1px solid #E0E2E7";
                elTilte.style.cssText = "text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);";
                elAref.forEach(function (element, i) {
                    element.style.cssText = "color:#000;font-weight: 400";
                })

            }
            else {
                elHeader.style.cssText = "background: transparent;"
                elMenu.style.cssText = "border-bottom:0";
            }
        }

        if (mobileHeader != null)
            mobileHeader.style.cssText = "background:#FFF;border-bottom:1px solid #E0E2E7;";
    });

}
window.onload = pageLoad;
const goSearch = () => {
    const searchText = document.querySelector('.main-title input');
    location.href = `../pages/search.html?stext=${searchText.value}`;
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

const swalMsg = (type, title, text) => {
    //  warning, success, info, question, error
    let _icon = "";
    switch (type) {
        case 0: _icon = "warning"; break;
        case 1: _icon = "success"; break;
        case 2: _icon = "info"; break;
        case 3: _icon = "question"; break;
        case 4: _icon = "error"; break;
        default: _icon = "warning"; break;
    }
    Swal.fire({
        title: title,
        text: text,
        icon: _icon,
        width: "360px",
        confirmButtonColor: "#000",
        confirmButtonText: '<div style="direction:rtl;font-size:18px;font-weight:bold;">확인</div>',
        customClass: {
            popup: "swal2-border-radius",
            confirmButton: "swal2-button-radius" //버튼
        }
    });

}

