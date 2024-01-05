const starSpan = document.querySelector('#review-popup .star span'),
    starSpanInput = document.querySelector('#review-popup .star input'),
    starGrade = document.querySelector('.star-container .star-grade'),
    starCount = document.querySelector('.review-count .star-count'),
    popCont = document.querySelector('.popup-container'),
    reviewListCont = document.querySelector('.review-list-container'),
    selectBox = document.querySelector('.review-tab-right .selectBox'),
    label = document.querySelector('.selectBox .label'),
    optionList = document.querySelector('.selectBox .optionList'),
    optionItem = document.querySelectorAll('.selectBox .optionItem'),
    totalReviewNum = document.querySelector('.review-container .total'),
    reviewScore = document.querySelector('.review-count .review-score');

let reviewListContLi;

// ---------------후기 작성 팝업 > 별점 드래그 시작---------------------
const drawStar = function (target) {
    starSpan.style.width = `${target.value * 10}%`;
    let grade = target.value / 2;

    if (Number.isInteger(grade)) {// 정수이면
        grade = grade.toString() + '.0';
    }

    starGrade.innerText = grade;
}

const dsf = [];
starSpanInput.value = 0; // 초기화
//---------------------- 별점 드래그 끝 -------------------------
// -------------json 가져오기 --------------
let reviewList = [];
let reviewListBackup = [];
fetch("../datas/review.json")
    .then(type => type.json())
    .then(result => {
        reviewList = result.data;
        reviewListBackup = result.data; //print 초기화용 백업
        fnReviewPage();
    }).catch(error => {
        // console.log(error);
    });

let fnPrintReview = function () {
    let resultArr = '';
    reviewList.forEach((el, i) => {
        // console.log(el.id)
        resultArr += `<li class="list-result">
            <div class="left">
                <span class="star-count">★★★★★</span>
                <p class="user-id">${el.id}</p>
                <p class="user-date">${el.date}</p>
                <p class="user-like">
                    <span class="heart">♡</span>
                    <span class="like-num">${el.like}</span>
                </p>
            </div>
            <div class="right">${el.review}</div>
        </li>`
    });
    reviewListCont.innerHTML = resultArr;
}

let fnReviewPage = function () {
    // ------------------- review.json data 뿌리기 ----------------------
    // localstorage에 현재 주소(키)가 있으면 가져온 다음에 fnPrintReview
    let fnPrintEveryReviewList = function () {
        if (localStorage.getItem(location.href)) {
            reviewList = [...reviewListBackup]; //초기화
            let newArr = localStorage.getItem(location);
            reviewList.push(...JSON.parse(newArr));
        }
        fnPrintReview();
    }
    fnPrintEveryReviewList();

    //-------- 좋아요 시작 --------
    let likeBtnEvent = function () {
        const likeBtn = document.querySelectorAll('.user-like .heart');

        likeBtn.forEach((el, i) => {
            let likeFun = function () {
                el.innerText = "♥";
                el.nextElementSibling.innerText = reviewList[i].like;
                setTimeout(() => { el.innerText = "♡"; }, 200);
            }

            // 여러번 누를 수 없게, 또 누르면 차감되도록!
            let count = 0;
            el.addEventListener("click", function () {
                if (count === 0) {
                    reviewList[i].like++;
                    likeFun();
                    count = 1;
                } else {
                    reviewList[i].like--;
                    likeFun();
                    swalMsg(0, "중복", "좋아요가 취소됩니다.")
                    count = 0;
                }
            })
        })
    }
    likeBtnEvent();

    // ---------------------------------------------------별점 점수 시작
    // ---------------후기 점수 평균 출력 테스트
    let likeGradeFunc = function () {
        reviewListContLi = document.querySelectorAll('.review-list-container li')
        let total = 0;

        function drawReviewStar() {
            reviewListContLi.forEach((el, i) => {
                let reviewStarCount = el.firstElementChild.firstElementChild;
                let starNum = Number(reviewList[i].grade);
                let starGradeNum = (starNum / 5) * 100;
                reviewStarCount.style.background = `linear-gradient(to right, #EAB838, #EAB838 ${starGradeNum}%, #E0E2E7 ${starGradeNum}%`;
                reviewStarCount.style.backgroundClip = 'text';
                reviewStarCount.style.webkitBackgroundClip = 'text';

                total += starNum; // 기존 별점 합계(실수)
                // console.log(starNum, total)
            })
        }
        drawReviewStar();

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
            let arrayReviewFunc = function () {
                if (el.dataset.num == "2") { // 인기순
                    reviewList.sort((a, b) => a.like - b.like);
                    fnPrintReview();
                    likeGradeFunc();
                    likeBtnEvent();
                } else if (el.dataset.num == "3") { // 별점순
                    reviewList.sort((a, b) => a.grade - b.grade);
                    fnPrintReview();
                    likeGradeFunc();
                    likeBtnEvent();
                } else if (el.dataset.num == "1") { // 최신순
                    reviewList.sort((a, b) => a.Idx - b.Idx);
                    fnPrintReview();
                    likeGradeFunc();
                    likeBtnEvent();
                }
            }
            arrayReviewFunc();
        }
    }) // ------------------드롭다운 메뉴 끝

    // ----------------------후기작성 팝업 시작
    const writeBtn = document.querySelector('.review-tab-right .write-btn'),
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
    totalReviewNum.innerText = reviewList.length;

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
                popCont.classList.remove('active');
                popBg.classList.remove('bg-active');
                swalMsg(1, "성공", "상품 후기가 등록되었습니다!")

                //뿌리기 // 새 배열 추가
                let newArr = {
                    "Idx": reviewList.length + 1,
                    "id": "비회원",
                    "date": year + '.' + month + '.' + date,
                    "like": 0,
                    "grade": parseFloat(starSpanInput.value) / 2,
                    "review": reviewPopText.value
                };

                // 로컬스토리지에 저장(setItem)
                // 로컬스토리지 값 가져오기(getItem)
                // 로컬스토리지에 해당주소(key)의 값이 있으면 값을 아래에 추가함
                // 없으면 걍 생성함
                let newItem = JSON.parse(localStorage.getItem(location)) || [];
                if (newItem != null) {
                    newItem.push(newArr)
                    localStorage.setItem(`${location.href}`, JSON.stringify(newItem));
                }
                else {
                    localStorage.setItem(`${location.href}`, JSON.stringify(newArr));
                }

                fnPrintEveryReviewList(); // list 새로 뿌림
                likeGradeFunc(); // 좋아요
                likeBtnEvent(); // 버튼 이벤트

                // 리뷰 개수 업데이트
                totalReviewNum.innerText = reviewList.length;
            } else {
                swalMsg(4, "오류", "10자 이상 입력해주세요!")
            }
        }

        reviewNextBtn.onclick = function (e) {
            e.preventDefault();
            popCont.classList.remove('active');
            reviewNext.classList.remove('active');
            popBg.classList.remove('bg-active');
        }
    }) // ------------------------------------------------후기작성 팝업 끝
}