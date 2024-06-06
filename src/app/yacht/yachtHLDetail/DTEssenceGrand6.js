function move() {
  var elem = document.getElementById("myBar");
  var width = 0;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}
move();
function noneAttr() {
  var elements = document.querySelectorAll('.table__dtYacht, .des__ovv, .item__note');
  elements.forEach(function (element) {
    element.classList.add("classNone")
  });
  var test = document.getElementById('form__book');
  test.classList.add("opFrmBook")
  var test2 = document.getElementsByClassName('item__over-view');
  for (var i = 0; i < test2.length; i++) {
    test2[i].classList.toggle('active__ovv');
  }
}

function hasAttr() {
  var elements = document.querySelectorAll('.table__dtYacht, .des__ovv, .item__note');
  elements.forEach(function (element) {
    element.classList.remove("classNone")
  });
  var test = document.getElementById('form__book');
  test.classList.remove("opFrmBook")
  var test2 = document.getElementsByClassName('item__over-view');
  for (var i = 0; i < test2.length; i++) {
    test2[i].classList.toggle('active__ovv');
  }
}

function validation() {
  const name = document.getElementById('name__frm');
  const email = document.getElementById('email__frm');
  const address = document.getElementById('address__frm');
  const numPhone = document.getElementById('numPhone__frm');
  const dateStart = document.getElementById('date__frm');
  function validateEmail(email) {
    var characters = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return characters.test(String(email).toLowerCase());
  }
  function validatePhoneNumber(numPhone) {
    // Biểu thức chính quy để kiểm tra số điện thoại (có thể thay đổi tùy theo định dạng cần kiểm tra)
    var characters = /^\d{10}$/; // Ví dụ: kiểm tra số điện thoại có đúng 10 chữ số hay không
    return characters.test(String(numPhone).toLowerCase());
  }
  function isValidDate(dateStart) {
    var date = new Date(dateStart);
    return !isNaN(date.getTime()); // Kiểm tra xem date có phải là một ngày hợp lệ không
  }
  if (!name.value) {
    // alert('Bạn chưa nhập tên')
    return false
  }
  if (!validateEmail(email.value)) {
    // alert('Bạn chưa nhập đúng email')
    return false
  }
  if (!address.value) {
    // alert('Bạn chưa nhập địa chỉ')
    return false
  }
  if (!validatePhoneNumber(numPhone.value)) {
    // alert('Bạn chưa nhập số điện thoại')
    return false
  }
  if (!isValidDate(dateStart.value)) {
    // alert('Bạn chưa nhập ngày tháng năm')
    return false
  }
  return (true)
}
document.getElementById("form__book").addEventListener("submit", function (e) {
  e.preventDefault();
  if (validation() === true) {
    var element = document.getElementById('confirmFormm')
    element.classList.add('opFrmBook')
    document.body.classList.add("submitted");
    window.scrollTo(0, 0);

    setTimeout(function () {
      document.body.classList.remove("submitted");
      element.classList.remove('opFrmBook')
    }, 2000); // Thời gian tính bằng mili giây (ở đây là 3 giây)
  } else {
    alert('Quý khách vui lòng kiểm tra và nhập lại thông tin <3')
  }
});
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