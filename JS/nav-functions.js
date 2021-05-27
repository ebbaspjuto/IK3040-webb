// code for functions in sidenav

// event-listener to links in menu
document.getElementById("burger").addEventListener("click", showSidenav);
document.getElementById("sidenav").addEventListener("click", hideSidenav);

function hideSidenav() {
    document.getElementById("sidenav").style.display="none";
};


function showSidenav(){
    document.getElementById("sidenav").style.display="inline";
}

// function dropdown

let dropdownContent = document.getElementsByClassName("dropdown-links");


function displayDropdown(event){
    var childNodes = event.target.parentNode.childNodes;
    for (let i = 0; i < childNodes.length; i++){
        if (childNodes[i].classList && childNodes[i].classList.contains("dropdown-links")){
           console.log(childNodes[i].style.display)
            if(childNodes[i].style.display == "flex"){
                childNodes[i].style.display = "none";
            } else {
                for (let j=0; j < dropdownContent.length; j++){
                    dropdownContent[j].style.display = "none"
                } 
                childNodes[i].style.display = "flex";
            }
        }
    }
};

