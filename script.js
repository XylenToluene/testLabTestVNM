const carusel = document.querySelector(".carusel");
firstImg = carusel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carusel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carusel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pagex - prevPageX;
    carusel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop =() =>{
    isDragStart = false;
}

carusel.addEventListener("mousedown", dragStart);
carusel.addEventListener("mousemove", dragging);
carusel.addEventListener("mouseup", dragStop);