let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(() => { next.click() }, 3000);
function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 3000);
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    })
})
window.onresize = function (event) {
    reloadSlider();
};

// chat box
function ChatFunction() {
    const element = document.querySelector('.chat__box');
    element.classList.add('active__chat-box')
    const element1 = document.querySelector('.fix__img');
    element1.classList.add('active__fix-img')
}
function closeChat() {
    const element = document.querySelector('.chat__box')
    element.classList.remove('active__chat-box')
    const element1 = document.querySelector('.fix__img');
    element1.classList.remove('active__fix-img')
}

// rps
function opMenu() {
    const element = document.querySelector('.menu__m-t');
    element.classList.add('menu__m-t__open')
    element.classList.remove('menu__m-t__close')
    document.body.classList.add("submitted");
}
function closeX() {
    const element = document.querySelector('.menu__m-t');
    element.classList.add('menu__m-t__close')
    element.classList.remove('menu__m-t__open')
    document.body.classList.remove("submitted");
}
