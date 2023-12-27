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
}

window.addEventListener('scroll', function (e) {
    const elMenu = document.querySelector('.main-menu nav');
    const elAref = document.querySelectorAll('.main-menu nav a');
    const elTilte = document.querySelector('.main-title p a');
    const elHeader = document.querySelector('.header-pc');
    let diff = (window.scrollY - elMenu.offsetTop)


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
        elMenu.style.cssText = " border-bottom: 1px solid rgba(255, 255, 255, 0.3);";
        elTilte.style.cssText = "text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);"
        elAref.forEach(function (element, i) {
            element.style.cssText = "color:#FFF;font-weight: 400";
        })
    }
});

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
window.onload = pageLoad;
