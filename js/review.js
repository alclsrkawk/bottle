const selectBox = document.querySelector('.review-tab-right .selectBox'),
    label = document.querySelector('.selectBox .label'),
    optionList = document.querySelector('.selectBox .optionList'),
    optionItem = document.querySelectorAll('.selectBox .optionItem');

// 드롭다운 메뉴 시작
label.addEventListener('click', function () {
    optionList.classList.toggle('active');
    selectBox.classList.toggle('active');
})

optionItem.forEach(function (el) {
    el.addEventListener('mouseover', function () {
        el.classList.add('hover');
    })

    el.addEventListener('mouseout', function () {
        el.classList.remove('hover');
    })

    el.onclick = function () {
        optionItem.forEach(function (el) {
            el.classList.add('hover2')
        })
        el.removeEventListener('mouseover', function () {
            el.classList.add('hover');
        })
        let innerText = el.innerText;
        label.innerText = innerText;
        optionList.classList.toggle('active');
        selectBox.classList.toggle('active');
        let setTime = function () {
            optionItem.forEach(function (el) { el.classList.remove('hover2') })
        }
        setTimeout(setTime, 1000);
    }
}) // 드롭다운 메뉴 끝

// 후기작성 팝업 시작
const writeBtn = document.querySelector('.review-tab-right .write-btn'),
    popCont = document.querySelector('.popup-container'),
    reviewPop = document.querySelector('#review-popup'),
    reviewPopBtn = document.querySelector('#review-popup .next-btn'),
    reviewPopText = document.querySelector('#review-popup textarea'),
    reviewNext = document.querySelector('.next-step'),
    reviewNextBtn = document.querySelector('.next-step .close'),
    closeBtn = document.querySelector('.close'),
    popBg = document.querySelector('.main-section .popbg');

writeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    reviewPop.classList.remove('hidden');
    popCont.classList.add('active');
    popBg.classList.add('bg-active');

    closeBtn.onclick = function () {
        popCont.classList.remove('active');
        popBg.classList.remove('bg-active');
    }

    reviewPopBtn.onclick = function (e) {
        e.preventDefault();

        let userReview = reviewPopText.value;
        console.log(userReview)

        reviewPop.classList.add('hidden');
        reviewNext.classList.add('active');
    }

    reviewNextBtn.onclick = function (e) {
        e.preventDefault();
        popCont.classList.remove('active');
        reviewNext.classList.remove('active');
        popBg.classList.remove('bg-active');
    }
})

