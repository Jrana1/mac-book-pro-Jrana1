
/*declaring all the variable*/
let memoryBtn1 = document.getElementById("memory-btn-0");
let memoryBtn2 = document.getElementById("memory-btn-180");
let priceForMemory = document.getElementById("price-for-memory");

let storageBtn1 = document.getElementById("storage-btn-0");
let storageBtn2 = document.getElementById("storage-btn-100");
let storageBtn3 = document.getElementById("storage-btn-180");
let priceForExtraStorage = document.getElementById("price-for-storage");

let deliveryBtn1 = document.getElementById("delivery-btn1");
let deliveryBtn2 = document.getElementById("delivery-btn2");
let deliveryCharge = document.getElementById("delivery-charge");

let totalPrice = document.getElementById("total-price");

let pomoBtn = document.getElementById("pomo-btn");
let pomoInput = document.getElementById("pomo-input");
let priceAfterPomo = document.getElementById("price-after-pomo");
/*updating price after getting pomo codo "stevekaku" and giving customer 20% discount on right code*/
pomoBtn.addEventListener("click", e => {
    if (pomoInput.value == "stevekaku") {
        priceAfterPomo.innerText = parseInt(totalPrice.innerText) - (parseInt(totalPrice.innerText) * 20) / 100;
    }
    else {
        priceAfterPomo.innerText = totalPrice.innerText;
    }
});

/*updating total price on every click*/
function updateTotal() {
    totalPrice.innerText = 1299 + parseInt(priceForMemory.innerText) + parseInt(priceForExtraStorage.innerText) + parseInt(deliveryCharge.innerText);
    priceAfterPomo.innerText = totalPrice.innerText;
    pomoInput.value = "";
}



memoryBtn1.addEventListener("click", e => {
    priceForMemory.innerText = 0;
    updateTotal();
});

memoryBtn2.addEventListener("click", e => {
    priceForMemory.innerText = 180;
    updateTotal();
});

storageBtn1.addEventListener("click", e => {
    priceForExtraStorage.innerText = 0;
    updateTotal();
});
storageBtn2.addEventListener("click", e => {
    priceForExtraStorage.innerText = 100;
    updateTotal();
});
storageBtn3.addEventListener("click", e => {
    priceForExtraStorage.innerText = 180;
    updateTotal();
});

deliveryBtn1.addEventListener("click", e => {
    deliveryCharge.innerText = 0;
    updateTotal();
});
deliveryBtn2.addEventListener("click", e => {
    deliveryCharge.innerText = 20;
    updateTotal();

});