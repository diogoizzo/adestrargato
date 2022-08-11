function toggleBtnPlay(e) {
    const btn = document.getElementById("circulo");
    const video = document.getElementById("video");
    if (video.paused) {
        btn.style.display = "none";
        if (e.target.parentElement === btn) video.play();
    } else {
        btn.style.display = "block";
    }
}
