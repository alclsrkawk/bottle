const selectBox = document.querySelector('.review-tab-right .selectBox'),
    label = document.querySelector('.selectBox .label'),
    optionList = document.querySelector('.selectBox .optionList'),
    optionItem = document.querySelectorAll('.selectBox .optionItem');

// 드롭다운 메뉴 시작
let addDropHover = function () {
    this.classList.add('hover');
}

optionItem.forEach(function (el, k, a) {
    label.addEventListener('click', function () {
        optionList.classList.toggle('active');
        selectBox.classList.toggle('active');
        el.addEventListener('mouseover', addDropHover)
    })

    el.onclick = function () {
        let innerText = el.innerText;
        label.innerText = innerText;
        optionList.classList.toggle('active');
        selectBox.classList.toggle('active');
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
}) // 후기작성 팝업 끝
// 후기작성 별점 시작
const drawStar = (target) => {
    document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
    let grade = target.value / 2;
    console.log('grade = ' + grade)

    if (Number.isInteger(grade)) {//정수이면
        console.log('grade는 정수니까 .0을 붙여야해용')
        grade = grade.toString() + '.0';
    }

    const starGrade = document.querySelector('.star-container .star-grade');
    starGrade.innerText = grade;
}
const dsf = [];
//후기작성 별점 끝

//후기 뿌리기 시작
let today = new Date(),
    year = today.getFullYear(), // 년도
    month = today.getMonth() + 1,  // 월
    date = today.getDate();  // 날짜

console.log(year + '/' + month + '/' + date)