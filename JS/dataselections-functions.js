// functions buttons

console.log('Hallå')
const buttons = document.getElementsByTagName("button");
for(let i = 0; i < buttons.length; i++ ) {
buttons[i].addEventListener("click", buttonStepOne);
}

function buttonStepOne(event){
    alert('hello')
    event.target.style.background
};


//document.getElementById("sidenav").style.display="none";