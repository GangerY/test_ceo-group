$(document).ready(function(){
    let elementsTarget = {
        elementGetButton: document.querySelector('.form-with-button__get-button'),
        elementPopupContainer: document.querySelector('.popup-container'),
        elementSelectionItems: document.querySelector('.selection-items'),
    };

    let popupClasses = {
        gettingNumberSuccess: 'getting-number_success',
    };

    let popup_successGettingNumber = `<div class="popup ${popupClasses.gettingNumberSuccess}">received, wait for a gift</div>`;
    
    $('.galery__slider').slick({
        dots: true,
        slidesToShow: 1,
        fade: true,
        centerMode: true,
        cssEase: 'linear',
        infinite: false,
        arrows: false,
        adaptiveHeight: true,
    });

    let isNumber = function (str){
        let flag = true;
        for(let i = 0; i < str.length; i++){

        }
    }

    elementsTarget.elementGetButton.addEventListener('click', (e) => {
        if(!/\D/.test(document.querySelector('.form-with-button__number').value) && document.querySelector('.form-with-button__number').value !== ''){
            elementsTarget.elementPopupContainer.insertAdjacentHTML('afterbegin', popup_successGettingNumber);
            let elementPopup_successGettingNumber = document.querySelector('.' + popupClasses.gettingNumberSuccess);
            // elementPopup_successGettingNumber.style.margin = '10px 300px 10px 0px';
            setTimeout(() => {
                elementPopup_successGettingNumber.remove();
                if(document.querySelectorAll('.getting-number_success').length === 0){
                    elementsTarget.elementPopupContainer.classList.remove('active');
                }
            }, 5000);
        }
        document.querySelector('.form-with-button__number').value = '';
    });

    elementsTarget.elementSelectionItems.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
    });
});