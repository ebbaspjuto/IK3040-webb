// code for functions in sidenav

// event-listener to links in menu
document.getElementById("burger").addEventListener("click", showSidenav);
document.getElementById("nav-link").addEventListener("click", hideSidenav);

function hideSidenav() {
    document.getElementById("sidenav").style.display="none";
};


function showSidenav(){
    document.getElementById("sidenav").style.display="inline";
}

// function dropdown

let dropdownContent = document.getElementsByClassName("dropdown-links");
let arrowUp = document.getElementById('nav-arrow-up');
let arrowDown = document.getElementById('nav-arrow-down');


function displayDropdown(event){
    var childNodes = event.target.parentNode.childNodes;
    var childs = event.target.childNodes;
    var up = null;
    var down = null;
    for (let i = 0; i < childs.length; i++) {
        if(childs[i].classList) {
            if(childs[i].classList.contains('fa-chevron-up')) {
                up = childs[i].classList;
            } else if(childs[i].classList.contains('fa-chevron-down')) {
                down = childs[i].classList;
            }
        }
    }
    if(up.contains('hide')) {
        up.remove('hide');
        down.add('hide')
    } else {
        down.remove('hide');
        up.add('hide')
    }
    for (let i = 0; i < childNodes.length; i++){
        if (childNodes[i].classList) {
            if (childNodes[i].classList.contains("dropdown-links")) {
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
    }
};

