var buttonSearch = document.querySelector('.button-popup');
var windowPopup = document.querySelector('.popup-element');
buttonSearch.addEventListener("click", function(evt) {
    evt.preventDefault();
    windowPopup.classList.toggle('modal-popup');
});