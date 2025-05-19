function openPopup() {
  Popup = document.querySelector('.Popup');
  Popup.style.display = 'flex';
}

function closePopup() {
  Popup = document.querySelector('.Popup');
  Popup.style.display = 'none';
}
function openReg() {
  Reg = document.querySelector('.Reg');
  Reg.style.display = 'flex';
}

function closeReg() {
  Reg = document.querySelector('.Reg');
  Reg.style.display = 'none';
}
function openAvtor() {
  Avtor = document.querySelector('.Avtor');
  Avtor.style.display = 'flex';
}

function closeAvtor() {
  Avtor = document.querySelector('.Avtor');
  Avtor.style.display = 'none';
}

let i = 0;

function goToSlide() {
  if (i < 0) {
    i = i * -1;
  }
  var num = i % 4;
  if (num === 0) {
    main1 = document.querySelector('.fifth_main1');
    main2 = document.querySelector('.fifth_main2');
    main3 = document.querySelector('.fifth_main3');
    main4 = document.querySelector('.fifth_main4');
    main1.style.display = 'flex';
    main2.style.display = 'none';
    main3.style.display = 'none';
    main4.style.display = 'none';
  } else if (num === 1) {
    main1 = document.querySelector('.fifth_main1');
    main2 = document.querySelector('.fifth_main2');
    main3 = document.querySelector('.fifth_main3');
    main4 = document.querySelector('.fifth_main4');
    main1.style.display = 'none';
    main2.style.display = 'flex';
    main3.style.display = 'none';
    main4.style.display = 'none';
  } else if (num === 2) {
    main1 = document.querySelector('.fifth_main1');
    main2 = document.querySelector('.fifth_main2');
    main3 = document.querySelector('.fifth_main3');
    main4 = document.querySelector('.fifth_main4');
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'flex';
    main4.style.display = 'none';
  }else if (num === 3) {
    main1 = document.querySelector('.fifth_main1');
    main2 = document.querySelector('.fifth_main2');
    main3 = document.querySelector('.fifth_main3');
    main4 = document.querySelector('.fifth_main4');
    main1.style.display = 'none';
    main2.style.display = 'none';
    main3.style.display = 'none';
    main4.style.display = 'flex';
  }
}

function next() {
  i = i + 1;
  goToSlide();
}

function back() {
  i = i - 1;
  goToSlide();
}

function reg() {
  alert("Вы успешно зарегестрировались!");
  closeReg();
  closePopup();
}

function review() {
  alert("Ваш отзыв принят на рассмотрение!");
}

function avtor() {
  alert("Вы успешно вошли в свой аккаунт!");
  closeAvtor();
  closePopup();
  img = document.querySelector('.guest').src = 'image/user.png';
}

var j = 0;

function raking() {
  if (j === 0) {
    star0 = document.querySelector('.star0');
    star0.style.color = 'yellow';
    star1 = document.querySelector('.star1');
    star1.style.color = 'white';
    star2 = document.querySelector('.star2');
    star2.style.color = 'white';
    star3 = document.querySelector('.star3');
    star3.style.color = 'white';
    star4 = document.querySelector('.star4');
    star4.style.color = 'white';
  } else if (j === 1) {
    star0 = document.querySelector('.star0');
    star0.style.color = 'yellow';
    star1 = document.querySelector('.star1');
    star1.style.color = 'yellow';
    star2 = document.querySelector('.star2');
    star2.style.color = 'white';
    star3 = document.querySelector('.star3');
    star3.style.color = 'white';
    star4 = document.querySelector('.star4');
    star4.style.color = 'white';
  } else if (j === 2) {
    star0 = document.querySelector('.star0');
    star0.style.color = 'yellow';
    star1 = document.querySelector('.star1');
    star1.style.color = 'yellow';
    star2 = document.querySelector('.star2');
    star2.style.color = 'yellow';
    star3 = document.querySelector('.star3');
    star3.style.color = 'white';
    star4 = document.querySelector('.star4');
    star4.style.color = 'white';
  } else if (j === 3) {
    star0 = document.querySelector('.star0');
    star0.style.color = 'yellow';
    star1 = document.querySelector('.star1');
    star1.style.color = 'yellow';
    star2 = document.querySelector('.star2');
    star2.style.color = 'yellow';
    star3 = document.querySelector('.star3');
    star3.style.color = 'yellow';
    star4 = document.querySelector('.star4');
    star4.style.color = 'white';
  } else if (j === 4) {
    star0 = document.querySelector('.star0');
    star0.style.color = 'yellow';
    star1 = document.querySelector('.star1');
    star1.style.color = 'yellow';
    star2 = document.querySelector('.star2');
    star2.style.color = 'yellow';
    star3 = document.querySelector('.star3');
    star3.style.color = 'yellow';
    star4 = document.querySelector('.star4');
    star4.style.color = 'yellow';
  }
}

function setstar0() {
  j = 0;
  raking();
  console.log(j)
}

function setstar1() {
  j = 1;
  raking();
  console.log(j)
}

function setstar2() {
  j = 2;
  raking();
  console.log(j)
}

function setstar3() {
  j = 3;
  raking();
  console.log(j)
}

function setstar4() {
  j = 4;
  raking();
  console.log(j)
}

const button = document.querySelector('.courses');
const drive = document.querySelector('.sixth_div');
const button1 = document.querySelector('.teacher');
const drive1 = document.querySelector('.fifth_div');
const button2 = document.querySelector('.contackt');
const drive2 = document.querySelector('.conta');

button.addEventListener('click' , e => {
  drive.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  })
})

button1.addEventListener('click' , e => {
  drive1.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  })
})

button2.addEventListener('click' , e => {
  drive2.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  })
})