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