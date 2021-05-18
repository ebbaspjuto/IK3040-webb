// test
console.log('Hej');

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

