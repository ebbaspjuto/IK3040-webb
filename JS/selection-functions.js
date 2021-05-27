// code for import choices 

// age-gender

function ageGender(){
    $('#selected-choice').load('../HTML/selection-choices/age-gender.html');
}

// yrke

function yrke(){
    $('#selected-choice').load('../HTML/selection-choices/yrke.html');
}

// save

let counter = 1; 
let saveText = document.getElementById("savetext");
let saveIcon = document.getElementById("saveicon")

function inc(){
    if (counter == 1){
        saveIcon.classList.remove("saveRotate");
    } if(counter < 10){
        saveText.innerText = `Sparades: ${counter} sekunder sedan`;
        counter = counter + 1;
        } else {
            saveIcon.classList.add("saveRotate");
            counter = 0;
        }
} 
setInterval(inc, 1000) 
