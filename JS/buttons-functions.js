// functions buttons



// all buttons
const buttons = document.getElementsByTagName("button");

// choose one button
const CHOOSE_BUTTON = "choose-button";
const chooseButtons = document.getElementsByClassName(CHOOSE_BUTTON);



for(let i = 0; i < buttons.length; i++ ) {
buttons[i].addEventListener("click", buttonStepOne);
}

function buttonStepOne(event){
    const button = event.target;
    if (button.classList.contains("buttontarget")){
        button.classList.remove("buttontarget")
    } else {
        if (button.classList.contains(CHOOSE_BUTTON)){
            for (let i=0; i<chooseButtons.length; i++){
                chooseButtons[i].classList.remove("buttontarget");
            }
        }
        button.classList.add("buttontarget");
    }
};

// buttons on pick-date / testnumber / testdate

let testDateChoices = document.getElementById("test-date");
let testNumberChoices = document.getElementById("test-number");

function testDate(){
    testDateChoices.style.display = "block";
    testNumberChoices.style.display = "none";
}

function testNumber(){
    testDateChoices.style.display = "none";
    testNumberChoices.style.display = "block";
}
