function AboutMouseOnHover(obj, id, divId) {
    document.getElementById(id).style.opacity = ".7";
    document.getElementById(divId).style.border = "0.4rem solid purple";
    document.getElementById(id).style.transition = "all 0.3s ease 0s";
}

function AboutMouseOnLeave(obj, id, divId) {
    document.getElementById(id).style.opacity = "0";
    document.getElementById(divId).style.border = "0.4rem solid #fff";
}

function AboutOnClick(obj, id, divId){
    document.getElementById(id).style.opacity = ".7";
    obj.style.opacity = "0";
    document.getElementById(divId).style.opacity = ".7";
    document.getElementById(id).style.transform = "translateX(0px)";
    document.getElementById(id).style.transition = "all 0.3s ease 0s";
}

function BackOnClick(obj, id, divId){
    document.getElementById(id).style.opacity = "0";
    obj.style.opacity = "0";
    document.getElementById(divId).style.opacity = ".7";
    document.getElementById(id).style.transform = "translateX(20px)";
    document.getElementById(id).style.transition = "all 0.3s ease 0s";
}