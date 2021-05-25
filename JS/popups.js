
// popup preview

function preview(){
    $('#popup-1-placeholder').load('../HTML/popups/preview.html');
}

function previewBack(){
    document.getElementById("popup-1-placeholder").innerHTML = "";
}

// dropdown in preview


function showInfo(){
    let specInfo = document.getElementById("show-info");
    let arrowUp = document.getElementById("arrow-up");
    let arrowDown = document.getElementById("arrow-down");
    
    if (specInfo.style.display == "none"){
        specInfo.style.display = "inline";
        arrowDown.style.display = "none"
        arrowUp.style.display = "inline"
    } else {
        specInfo.style.display="none";
        arrowDown.style.display = "inline"
        arrowUp.style.display = "none"
    }
};