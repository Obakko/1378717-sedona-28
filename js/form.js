var buttonSearch = document.querySelector('.button-popup');
var windowPopup = document.querySelector('.popup-element');
console.log(buttonSearch);
buttonSearch.addEventListener("click", function() {
    evt.preventDefault();
    windowPopup.toggleClass('popup-element')
});