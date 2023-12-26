const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const nextButton = document.querySelector('.next-button');

toggleButton.addEventListener('click', function () {
    menu.classList.toggle('show');
})

toggleButton.addEventListener('blur', function () {
    menu.classList.toggle('show');
})

options.forEach(function (item) {
    item.addEventListener('click', function (e){
        const value = e.currentTarget.textContent.trim();
        console.log(e.currentTarget)
        toggleButton.textContent = value;
        toggleButton.classList.add('selected');
        nextButton.removeAttribute('disabled');
    })
})