const selectBox = document.querySelector('.review-tab-right .selectBox'),
    label = document.querySelector('.selectBox .label'),
    optionList = document.querySelector('.selectBox .optionList'),
    optionItem = document.querySelectorAll('.selectBox .optionItem');

const totalReviewNum = document.querySelector('.review-container .total'),
    reviewListCont = document.querySelector('.review-list-container'),
    reviewListContLi = document.querySelectorAll('.review-list-container li'),
    reviewScore = document.querySelector('.review-count .review-score'),
    starSpan = document.querySelector('#review-popup .star span'),
    starSpanInput = document.querySelector('#review-popup .star input'),
    starGrade = document.querySelector('.star-container .star-grade'),
    starCount = document.querySelector('.review-count .star-count');

// ---------------------------------------------------별점 점수 시작
// ---------------후기작성 별점 시작
const drawStar = (target) => {
    starSpan.style.width = `${target.value * 10}%`;
    let grade = target.value / 2;

    if (Number.isInteger(grade)) {// 정수이면
        grade = grade.toString() + '.0';
    }

    starGrade.innerText = grade;

}
const dsf = [];
starSpanInput.value = 0; // 초기화
//---------------후기작성 별점 끝

let starLikeGrade = 0;

// ---------------후기 점수 평균 출력 테스트
// 2회차가 안됌~!!!
let likeGradeFunc = function () {
    let totalReviewCount = reviewListCont.childElementCount;
    let total = 0;

    reviewListContLi.forEach((el) => { // string값으로 넘어옴
        total += parseFloat(el.dataset.grade); // 기존 별점 합계(실수)
    })

    total += parseFloat(starSpanInput.value) / 2;
    starLikeGrade = total;

    console.log('리뷰 갯수는 ' + totalReviewCount)
    console.log('점수 합계는 ' + starLikeGrade)
    console.log('전송한 별점은 ' + parseFloat(starSpanInput.value) / 2)

    let goodsTotalGrade = (starLikeGrade / totalReviewCount).toFixed(1); // 소수점 첫째 자리
    reviewScore.innerText = goodsTotalGrade;

    // 평균 점수 별점 시각화
    let starGradeNum = (Number(goodsTotalGrade) / 5) * 100;
    starCount.style.background = `linear-gradient(to right, #EAB838, #EAB838 ${starGradeNum}%, #E0E2E7 ${starGradeNum}%`;
    starCount.style.backgroundClip = 'text';
}

likeGradeFunc();
// ------------후기 점수 평균 출력 테스트 끝------------

//--------------- 드롭다운 메뉴 시작 ------------------
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

        let arrayReviewFunc = function () {
            if (el.dataset.num == "2") {
                console.log('후기를 인기순으로 정렬합니다.')
                // 추후 구현!!
            } else if (el.dataset.num == "3") {
                console.log('후기를 별점순으로 정렬합니다.')
                // 1. 모든 li의 data-grade의 배열 생성
                // 2. 배열을 높은 순서대로 정렬함
            } else {
                console.log('후기를 최신순으로 정렬합니다.')
            }
        }
        arrayReviewFunc();
    }
}) // ------------------드롭다운 메뉴 끝

// ----------------------후기작성 팝업 시작
const writeBtn = document.querySelector('.review-tab-right .write-btn'),
    popCont = document.querySelector('.popup-container'),
    reviewPop = document.querySelector('#review-popup'),
    reviewPopBtn = document.querySelector('#review-popup .next-btn'),
    reviewPopText = document.querySelector('#review-popup textarea'),
    reviewNext = document.querySelector('.next-step'),
    reviewNextBtn = document.querySelector('.next-step .close'),
    closeBtn = document.querySelector('.close'),
    popBg = document.querySelector('.main-section .popbg');

//-----후기 뿌리기 시작
let today = new Date(),
    year = today.getFullYear(), // 년도
    month = today.getMonth() + 1,  // 월
    date = today.getDate();  // 날짜

// li 갯수 찾기 = 부모.메소드
totalReviewCount = reviewListCont.childElementCount;
totalReviewNum.innerText = totalReviewCount;

// 후기 작성하기 누르면
writeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    reviewPopText.value = ''; // textarea 초기화
    starSpan.style.width = '0%'; // 별점 드래그 초기화
    starGrade.innerText = '0.0'; // 별점 숫자 초기화

    reviewPop.classList.remove('hidden');
    popCont.classList.add('active');
    popBg.classList.add('bg-active');

    closeBtn.onclick = function () {
        popCont.classList.remove('active');
        popBg.classList.remove('bg-active');
    }

    // 후기쓰고 등록 버튼 누를때!!
    reviewPopBtn.onclick = function (e) {
        e.preventDefault();
        reviewPop.classList.add('hidden');
        reviewNext.classList.add('active');

        // 리뷰 개수 업데이트
        totalReviewCount = totalReviewCount + 1;
        totalReviewNum.innerText = totalReviewCount;

        //뿌리기
        let userReview = `<div class="left">
                        <div class="star-count">
                            <span class="star count">★</span>
                            <span class="star count">★</span>
                            <span class="star count">★</span>
                            <span class="star count">★</span>
                            <span class="star">★</span>
                        </div>
                        <p class="user-id">비회원</p>
                        <p class="user-date">${year + '.' + month + '.' + date}</p>
                    </div>
                        <div class="right">
                        <p>${reviewPopText.value}</p>
                        </div>`;
        const showReview = document.createElement('li');
        showReview.classList = `list-result`;
        showReview.dataset.num = `${totalReviewCount}`;
        showReview.dataset.grade = `${parseFloat(starSpanInput.value) / 2}`;
        showReview.dataset.like = `${0}`;

        showReview.innerHTML = userReview;
        reviewListCont.append(showReview);
        likeGradeFunc();
    }

    reviewNextBtn.onclick = function (e) {
        e.preventDefault();
        popCont.classList.remove('active');
        reviewNext.classList.remove('active');
        popBg.classList.remove('bg-active');
    }
}) // ------------------------------------------------후기작성 팝업 끝


