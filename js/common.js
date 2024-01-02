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
        const elTilte = document.querySelector('.main-title p a');
        const elHeader = document.querySelector('.header-pc');

        if (elMenu != null) {
            let diff = (window.scrollY - elMenu.offsetTop);

            if (diff >= 180) {
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
                // elTilte.style.cssText = "text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);"
                // elAref.forEach(function (element, i) {
                //     element.style.cssText = "color:#FFF;font-weight: 400";
                // })
            }
        }
    });

}
window.onload = pageLoad;

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
        confirmButtonColor: "#000",
        confirmButtonText: '<div style="direction:rtl;font-size:18px;font-weight:bold;">확인</div>',
        customClass: {
            popup: "swal2-border-radius",
            confirmButton: "swal2-button-radius" //버튼
        }
    });

}

