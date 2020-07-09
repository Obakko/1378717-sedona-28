var buttonSearch = document.querySelector('.button-popup');
var modalPopup = document.querySelector('.modal-popup');
var windowPopup = document.querySelector('.popup-element');
var formBlock = document.querySelector('.reservation-form');
var arrivalInput = document.querySelector('.date-arrival input');
var departureInput = document.querySelector('.date-departure input');
var adultsInput = document.querySelector('.adults input');
var childsInput = document.querySelector('.childs input');
buttonSearch.addEventListener('click', function(evt) {
    windowPopup.classList.remove('modal-error');
    evt.preventDefault();
    windowPopup.classList.toggle('modal-popup');
});
formBlock.addEventListener('submit', function(evt) {
    if (!arrivalInput.value || !departureInput.value || !adultsInput.value || !childsInput.value) {
        windowPopup.classList.remove('modal-error');
        evt.preventDefault();
        modalPopup.offsetWidth = modalPopup.offsetWidth;
        windowPopup.classList.add('modal-error');
    }
});