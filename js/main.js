$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 11,
    margin: 8,
    loop:true,
    autoWidth: true
  });
});

const merriage = document.querySelector('#merriage')
const man = document.querySelector('#man')
const woman = document.querySelector('#woman')

function deleteFilter() {
  merriage.style.display = 'none';
  man.style.display = 'none';
  woman.style.display = 'none';
}

$('.section-shopping__btn').on('click', function shoppingFilter() {
  deleteFilter()

  if (this.textContent === 'МУЖУ' || this.textContent === 'ПАРТНЕРУ') {
    man.style.display = 'flex'
  } else if (this.textContent === 'СВАДЬБА' || this.textContent === 'КОЛЛЕКЦИИ'|| this.textContent === 'РЕДКОСТЬ') {
    merriage.style.display = 'flex'
  } else if (this.textContent === 'ЖЕНЕ') {
    woman.style.display = 'flex'
  }
})

const navSolid = document.querySelector('.nav-solid');
const burgerOverlay = document.querySelector('.burger-overlay');

$('.burger-nav').on('click', function navSolidOpenClose() {
  if (this.classList.contains('burger-active')) {
    navSolid.style.transform = 'translateX(100%)';
    this.classList.remove('burger-active');
    burgerOverlay.style.display = 'none';
    setTimeout(() => {
      this.style.background = '#333333';
    }, 500);
  } else {
    navSolid.style.transform = 'translateX(0)';
    this.classList.add('burger-active');
    this.style.background = 'none';
    burgerOverlay.style.display = 'block';
  }
})

$('.burger-overlay').on('click', function navSolidOpenCloseOverlay() {
  navSolid.style.transform = 'translateX(100%)';
  $('.burger-nav').removeClass("burger-active");
  setInterval(() => {
    $('.burger-nav').css('background', '#333333');
  }, 500)
  this.style.display = 'none';
})

