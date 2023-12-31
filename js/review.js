const selectBox = document.querySelector('.review-tab-right .selectBox'),
    label = document.querySelector('.selectBox .label'),
    optionList = document.querySelector('.selectBox .optionList'),
    optionItem = document.querySelectorAll('.selectBox .optionItem');

const totalReviewNum = document.querySelector('.review-container .total'),
    reviewListCont = document.querySelector('.review-list-container'),
    reviewScore = document.querySelector('.review-count .review-score'),
    starSpan = document.querySelector('#review-popup .star span'),
    starSpanInput = document.querySelector('#review-popup .star input'),
    starGrade = document.querySelector('.star-container .star-grade'),
    starCount = document.querySelector('.review-count .star-count');

let reviewListContLi;

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

// ---------------후기 점수 평균 출력 테스트
// 2회차가 안됌~!!!
let likeGradeFunc = function () {
    reviewListContLi = document.querySelectorAll('.review-list-container li')
    let total = 0;

    reviewListContLi.forEach((el) => {
        let reviewStarCount = el.firstElementChild.firstElementChild;
        let starNum = Number(el.dataset.grade);
        let starGradeNum = (starNum / 5) * 100;
        reviewStarCount.style.background = `linear-gradient(to right, #EAB838, #EAB838 ${starGradeNum}%, #E0E2E7 ${starGradeNum}%`;
        reviewStarCount.style.backgroundClip = 'text';
        reviewStarCount.style.webkitBackgroundClip = 'text';

        total += starNum; // 기존 별점 합계(실수)
        // console.log(starNum, total)
    })

    // 별점 총합의 평균 뿌리기
    let goodsTotalGrade = (total / reviewListContLi.length).toFixed(1); // 소수점 첫째 자리
    reviewScore.innerText = goodsTotalGrade;

    // 평균 점수 별점 시각화
    let starGradeNum = (Number(goodsTotalGrade) / 5) * 100;
    starCount.style.background = `linear-gradient(to right, #EAB838, #EAB838 ${starGradeNum}%, #E0E2E7 ${starGradeNum}%`;
    starCount.style.backgroundClip = 'text';
    starCount.style.webkitBackgroundClip = 'text';
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
        let reviewArr = '';
        let arrayReviewFunc = function () {
            if (el.dataset.num == "2") { // 인기순
                reviewListContLi = document.querySelectorAll('.review-list-container li'); // li 업데이트
                reviewArr = Array.from(reviewListContLi);
                reviewArr.sort((a, b) => a.dataset.like - b.dataset.like);

                reviewListCont.innerHTML = '';
                for (let i = 0; i < reviewArr.length; i++) {
                    reviewListCont.append(reviewArr[i])
                }
            } else if (el.dataset.num == "3") { // 별점순
                reviewListContLi = document.querySelectorAll('.review-list-container li'); // li 업데이트
                reviewArr = Array.from(reviewListContLi);
                reviewArr.sort((a, b) => a.dataset.grade - b.dataset.grade);

                reviewListCont.innerHTML = '';
                for (let i = 0; i < reviewArr.length; i++) {
                    reviewListCont.append(reviewArr[i])
                }
            } else { // 최신순
                reviewListContLi = document.querySelectorAll('.review-list-container li'); // li 업데이트
                reviewArr = Array.from(reviewListContLi);
                reviewArr.sort((a, b) => a.dataset.num - b.dataset.num);

                reviewListCont.innerHTML = '';
                for (let i = 0; i < reviewArr.length; i++) {
                    reviewListCont.append(reviewArr[i])
                }
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
reviewListContLi = document.querySelectorAll('.review-list-container li')
totalReviewCount = reviewListContLi.length;
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

        //10자 이상이면 넘어감
        if (reviewPopText.value.length >= 10) {
            reviewPop.classList.add('hidden');
            reviewNext.classList.add('active');
            reviewListContLi = document.querySelectorAll('.review-list-container li')
            //뿌리기
            let userReview = `<div class="left">
                        <div class="star-count">★★★★★</div>
                        <p class="user-id">비회원</p>
                        <p class="user-date">${year + '.' + month + '.' + date}</p>
                    </div>
                        <div class="right">
                        <p>${reviewPopText.value}</p>
                        </div>`;
            const showReview = document.createElement('li');
            showReview.classList = `list-result`;
            totalReviewCount++;
            showReview.dataset.num = `${totalReviewCount}`;
            showReview.dataset.grade = `${parseFloat(starSpanInput.value) / 2}`;
            showReview.dataset.like = `${0}`;
            showReview.innerHTML = userReview;
            reviewListCont.append(showReview);

            likeGradeFunc();

            // 리뷰 개수 업데이트
            totalReviewNum.innerText = totalReviewCount;
        } else {
            window.alert('10자 이상 입력해주세요!');
        }
    }

    reviewNextBtn.onclick = function (e) {
        e.preventDefault();
        popCont.classList.remove('active');
        reviewNext.classList.remove('active');
        popBg.classList.remove('bg-active');
    }
}) // ------------------------------------------------후기작성 팝업 끝


