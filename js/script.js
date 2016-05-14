var feedbackPopup = document.querySelector(".feedback");
var feedbackButton = document.querySelector(".company-feedback-btn");
var feedbackClose = document.querySelector(".feedback-close");
var feedbackCancel = document.querySelector(".feedback-cancel");
var feedbackLogin = feedbackPopup.querySelector("[name=login]");
 
    feedbackButton.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.add("show-block");
        feedbackLogin.focus();
    });

   
    feedbackClose.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.remove("show-block");
    });

    feedbackCancel.addEventListener("click", function (event) {
        event.preventDefault(event);
        feedbackPopup.classList.remove("show-block");
    });

    window.addEventListener("keydown", function (event) {
        if (event.keyCode == 27) {
            if (feedbackPopup.classList.contains("show-block")) {
                feedbackPopup.classList.remove("show-block");
            }
        }
    });


var sliderDeliveryLink = document.querySelector("#delivery");
var sliderDeliveryBlock = document.querySelector(".service-details-delivery");
var sliderWarranryLink = document.querySelector("#warranty");
var sliderWarrantyBlock = document.querySelector(".service-details-warranty");
var sliderCreditLink = document.querySelector("#credit");
var sliderCreditBlock = document.querySelector(".service-details-credit");

sliderDeliveryLink.addEventListener("click",function(event){
    event.preventDefault(event);
    sliderDeliveryBlock.classList.add("show-block");
});

sliderWarranryLink.addEventListener("click",function(event){
    event.preventDefault(event);
    sliderWarrantyBlock.classList.add("show-block");
    
});

sliderCreditLink.addEventListener("click",function(event){
    event.preventDefault(event);
    sliderCreditBlock.classList.add("show-block");
});



var mapLink = document.querySelector(".company-map");
var mapPopup = document.querySelector(".map");
var mapClose = document.querySelector(".map-close");

mapLink.addEventListener("click", function (event) {
	event.preventDefault(event);
	mapPopup.classList.add("show-block");
});

mapClose.addEventListener("click", function (event) {
	event.preventDefault(event);
	mapPopup.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (mapPopup.classList.contains("show-block")) {
            mapPopup.classList.remove("show-block");
        }
    }
});

var buyItemButtons = document.querySelectorAll(".catalog-item-buy"), i;
var cartBlock = document.querySelector(".cart-notification");
var cartClose = document.querySelector(".cart-notification-close");
var cartCancel = document.querySelector(".cart-cancel-btn");

for (i = 0; i < buyItemButtons.length; ++i) {
	buyItemButtons[i].addEventListener("click", function (event) {
		event.preventDefault(event);
		cartBlock.classList.add("show-block");
	})
}

cartClose.addEventListener("click", function (event) {
	event.preventDefault(event);
	cartBlock.classList.remove("show-block");
});

cartCancel.addEventListener("click", function (event) {
	event.preventDefault(event);
	cartBlock.classList.remove("show-block");
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (cartBlock.classList.contains("show-block")) {
            cartBlock.classList.remove("show-block");
        }
    }
});