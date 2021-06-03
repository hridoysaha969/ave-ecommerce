"use strict";

// ===== PRE LOADER =====
var preLoader = document.querySelector('.preLoaderBox');

function loadFunction() {
  preLoader.style.display = 'none';
} // ===== TOP HEAFER SELECT BOX =====


var selectBox = document.querySelector('#sBox');
selectBox.addEventListener('focus', function () {
  selectBox.style.color = '#00c8c8';
});
selectBox.addEventListener('blur', function () {
  selectBox.style.color = '';
}); // ===== WOW JS ANIMATION =====

new WOW().init(); // ===== MENU =====

$('#menu').slicknav(); // ===== CATEGORY =====

var categoryBox = document.querySelector('.categoryBox');
var categoryList = document.querySelector('.skltbs-tab-group');
categoryBox.addEventListener('click', function () {
  categoryList.classList.toggle('show');
}); // ===== HOME TAB =====

$('#container').skeletabs({
  breakpoint: 140 // breakpointLayout: 'accordion'

}); // ===== SLIDER SECTION =====

$('.slider').slick({
  arrows: false,
  dots: false,
  slidesToShow: 2,
  slidesToScroll: 1
});