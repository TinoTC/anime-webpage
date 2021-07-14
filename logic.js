document.getElementById("motivate").addEventListener("click", unhide)
function unhide() {
    document.getElementById("inspiring").style.opacity=1;
}

document.getElementById("unmotivate").addEventListener("click", hide)
function hide() {
    document.getElementById("inspiring").style.opacity=0;
}
