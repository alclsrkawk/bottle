(function () {
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
})();

const pageLoad = () => {
    const elNav = document.querySelectorAll('.main-menu nav a');
    const num = localStorage.num || 0;
    // elNav[num].style.cssText = 'color:red';

    console.log("num :", num, "nav ", elNav)
    elNav.forEach((element, i) => {
        element.onclick = (e) => {
            // e.preventDefault();
            localStorage.num = i;
        }
    });
}

window.onload = pageLoad;