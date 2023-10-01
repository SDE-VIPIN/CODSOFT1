// for toggle on light and dark mode
let rootEle = document.querySelector(":root");
let toggleBtn = document.querySelector(".toggleBtn");

//adding class to that element
rootEle.classList.add("light-mode")
toggleBtn.children[1].classList.add("displayNone");

function modeToggle(){
    //adding and removing class on click 
    rootEle.classList.toggle("dark-mode");
    toggleBtn.children[0].classList.toggle("displayNone");
    toggleBtn.children[1].classList.toggle("displayBlock");
}

//setting project thumbnails

let allProjectThumbnails = document.querySelectorAll(".thumbnail");

function setProjectThumbnails(allProjectThumbnail, projectName, color){

    allProjectThumbnail.style = `
    background: url(./icons/ProjectThumbnails/${projectName}.png) no-repeat center;
    background-size: contain;
    background-color: ${color};
    `;
}

setProjectThumbnails(allProjectThumbnails[0], "project1", "#27272c");
setProjectThumbnails(allProjectThumbnails[1], "project2", "#22272c");
setProjectThumbnails(allProjectThumbnails[2], "project3", "#22272c");
setProjectThumbnails(allProjectThumbnails[3], "project4", "#22272c");
setProjectThumbnails(allProjectThumbnails[4], "project5", "#22272c");
setProjectThumbnails(allProjectThumbnails[5], "project6", "#22272c");
