// functions buttons

// all buttons
const buttons = document.getElementsByTagName("button");

// one choose one button
const chooseButtons = document.getElementsByClassName("button-step-one")

for(let i = 0; i < buttons.length; i++ ) {
buttons[i].addEventListener("click", buttonStepOne);
}

function buttonStepOne(event){
    const button = event.target;
    if (button.classList.contains("buttontarget")){
        button.classList.remove("buttontarget")
    } else {
        if (button.classList.contains("button-step-one")){
            for (let i=0; i<chooseButtons.length; i++){
                chooseButtons[i].classList.remove("buttontarget");
            }
        }
        button.classList.add("buttontarget");
    }
};

