//carAccident BG
let carBox = document.getElementById('car');
let carText = document.getElementById('carRight');

function showCarBG () {
    carBox.style.cssText = 'background-image: url("Assets/benji-practice-area-parent-car-accident-tile-background-img.webp");background-size: cover; background-position: center;';
    carText.style.color ='white';
}

function removeCarBG () {
    carBox.style.cssText = 'background-image: none';
    carText.style.color ='black';

}

carBox.addEventListener('mouseover',showCarBG);
carBox.addEventListener('mouseout',removeCarBG);

// truckACcident BG

let truckBox = document.getElementById('truck');
let truckText = document.getElementById('truckRight');

function showTruckBG () {
    truckBox.style.cssText = 'background-image: url("Assets/benji-practice-area-parent-truck-accidents-header.webp");background-size: cover;';
    truckText.style.color ='white';
}

function removeTruckBG () {
    truckBox.style.cssText = 'background-image: none';
    truckText.style.color ='black';

}

truckBox.addEventListener('mouseover',showTruckBG);
truckBox.addEventListener('mouseout',removeTruckBG);

// premiseliability BG

let premiseBox = document.getElementById('Premises-Liability');
let premiseText = document.getElementById('premise-right-side');

function showPremiseBG () {
    premiseBox.style.cssText = 'background-image: url("Assets/benji-practice-area-parent-premises-liability-header.webp");background-size: cover;color: white; background-position: center;';
    premiseText.style.color ='white';
}

function removePremiseBG () {
    premiseBox.style.cssText = 'background-image: none';
    premiseText.style.color ='black';

}

premiseBox.addEventListener('mouseover',showPremiseBG);
premiseBox.addEventListener('mouseout',removePremiseBG);

// productsLiability BG

let productsLiabilityBox = document.getElementById('Products-Liability');
let productText = document.getElementById('product-right-side');


function showProductBG () {
    productsLiabilityBox.style.cssText = 'background-image: url("Assets/benji-practice-area-parent-product-liability-header.webp");background-size: cover;color: white; background-position: center;';
    productText.style.color = 'white';
}

function removeProductBG () {
    productsLiabilityBox.style.cssText = 'background-image: none';
    productText.style.color = 'black';
    

}

productsLiabilityBox.addEventListener('mouseover',showProductBG);
productsLiabilityBox.addEventListener('mouseout',removeProductBG);


// Medical Malpractice BG

let medicalBox = document.getElementById('Medical Malpractice');
let medicalText = document.getElementById('medical-right-side');


function showmedicalBG () {
    medicalBox.style.cssText = 'background-image: url("Assets/benji-practice-area-medical_malpractice.webp");background-size: cover;color: white; background-position: center;';
    medicalText.style.color = 'white';
}

function removemedicalBG () {
    medicalBox.style.cssText = 'background-image: none';
    medicalText.style.color = 'black';
    

}

medicalBox.addEventListener('mouseover',showmedicalBG);
medicalBox.addEventListener('mouseout', removemedicalBG);

//Workplace Injuries

let workBox = document.getElementById('Workplace Injuries');
let workText = document.getElementById('work-right-side');


function showworkBG () {
    workBox.style.cssText = 'background-image: url("Assets/benji-practice-area-parent-work-injuries-header.webp");background-size: cover;color: white; background-position: center;';
    workText.style.color = 'white';
}

function removeworkBG () {
    workBox.style.cssText = 'background-image: none';
    workText.style.color = 'black';
    

}

workBox.addEventListener('mouseover',showworkBG);
workBox.addEventListener('mouseout', removeworkBG);


//Wrongful Death

let wrongBox = document.getElementById('Wrongful Death');
let wrongText = document.getElementById('wrong-right-side');


function showwrongkBG () {
    wrongBox.style.cssText = 'background-image: url("Assets/benji-practice-area-parent-wrongful-death-header.webp");background-size: cover;color: white; background-position: center;';
    wrongText.style.color = 'white';
}

function removewrongBG () {
    wrongBox.style.cssText = 'background-image: none';
    wrongText.style.color = 'black';
    

}

wrongBox.addEventListener('mouseover',showwrongkBG);
wrongBox.addEventListener('mouseout', removewrongBG);