const btn = document.getElementById("circulo");
const video = document.getElementById("video");
const frame = document.getElementById("divVideo");

frame.addEventListener("click", (e) => {
    if (video.paused) {
        btn.style.display = "none";
        if (e.target.parentElement === btn) video.play();
    } else {
        btn.style.display = "block";
    }
});

/*function toggleBtnPlay(e) {
    if (video.paused) {
        btn.style.display = "none";
        if (e.target.parentElement === btn) video.play();
    } else {
        btn.style.display = "block";
    }
}*/
