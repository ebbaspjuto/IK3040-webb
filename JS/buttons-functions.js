// functions buttons

// all buttons
let buttons = document.getElementsByTagName("button");

// choose one button
let CHOOSE_BUTTON = "choose-button";
let chooseButtons = document.getElementsByClassName(CHOOSE_BUTTON);

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

function reload(){
    buttons = document.getElementsByTagName("button");

    // choose one button
    CHOOSE_BUTTON = "choose-button";
    chooseButtons = document.getElementsByClassName(CHOOSE_BUTTON);

    for(let i = 0; i < buttons.length; i++ ) {
        buttons[i].addEventListener("click", buttonStepOne);
    }
}


// table

// all tablerows
const tableRows = document.getElementsByTagName("tr");

let CHOOSE_TABLEROW = "choose-tr";

for(let i = 0; i < tableRows.length; i++ ) {
    tableRows[i].addEventListener("click", tableRowChoose);
    }
    
    function tableRowChoose(event){
        const tableRow = event.target.parentNode;
        if (tableRow.classList.contains("buttontarget")){
            tableRow.classList.remove("buttontarget")
        } else {
            if (tableRow.classList.contains(CHOOSE_TABLEROW)){
                for (let i=0; i< tableRows.length; i++){
                    tableRows[i].classList.remove("buttontarget");
                }
            }
            tableRow.classList.add("buttontarget");
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


// date

function selectDate(event){
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    if(dateFrom.value && dateTo.value){
        let disableButtons = document.getElementsByTagName("button");
        for(let i = 0; i < disableButtons.length; i++){
            disableButtons[i].classList.remove("disable");
        }
        document.getElementById("button-number").addEventListener("click", testNumber)
        document.getElementById("button-date").addEventListener("click", testDate)
    }
}