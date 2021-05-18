// test
console.log('Hej');

// code for functions in sidenav

// event-listener to links in menu
document.getElementById("sidenav").addEventListener("click", viewSidenav);

function viewSidenav() {
    document.getElementById("sidenav").style.display="none";
};

// DocumentFragment.getElementById("nav-burger").addEventListner("click", showSidenav);

// function showSidenav(){
//     alert('Hej')
// }

