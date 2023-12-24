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
