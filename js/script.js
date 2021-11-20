function MouseOnHover(obj, id, img) {
    document.getElementById(id).style.opacity = ".5";
    document.getElementById(id).style.transform = "translateY(0px)";
    document.getElementById(id).style.transition = "all 0.3s ease 0s";
    document.getElementById("base").style.backgroundImage = "url('"+img+"')";
}

function MouseOnLeave(obj, id) {
    document.getElementById(id).style.opacity = "0";
    document.getElementById(id).style.transform = "translateY(-20px)";
}

function AboutMouseOnHover(obj, id, divId) {
    document.getElementById(id).style.opacity = ".7";
    document.getElementById(divId).style.border = "0.4rem solid purple";
    document.getElementById(id).style.transition = "all 0.3s ease 0s";
}

function AboutMouseOnLeave(obj, id, divId) {
    document.getElementById(id).style.opacity = "0";
    document.getElementById(divId).style.border = "0.4rem solid #fff";
}

function AboutOnClick(obj, id, gridId){
    //enable about-div
    document.getElementById(id).style.opacity = ".7";
    document.getElementById(id).style.pointerEvents = "auto";

    //disable grid-conation
    document.getElementById(gridId).style.pointerEvents = "none";
    document.getElementById(gridId).style.opacity = "0";

    //transition of about-div
    document.getElementById(id).style.transform = "translateX(0px)";
    document.getElementById(id).style.transition = "all 0.3s ease 0s";
}

function BackOnClick(obj, id, gridId){
   //disable about-div
    document.getElementById(id).style.opacity = "0";
    document.getElementById(id).style.pointerEvents = "none";

    //enable grid-contain
    document.getElementById(gridId).style.pointerEvents = "auto";
    document.getElementById(gridId).style.opacity = ".7";

    
    //transition of grid
    document.getElementById(id).style.transform = "translateX(1000px)";
    document.getElementById(id).style.transition = "all 0.3s ease 0s";
}