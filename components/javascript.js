//Rotate circle icons on scroll
window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("circle-icon");
    image.style.transform = "rotate(" + window.pageYOffset/1 + "deg)";
}