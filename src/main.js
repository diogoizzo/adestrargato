const btn = document.getElementById("circulo");
const video = document.getElementById("video");
const frame = document.getElementById("divVideo");

frame.addEventListener("click", (e) => {
    if (e.target.parentElement === btn) video.play();
});
video.onplay = () => (btn.style.display = "none");
video.onpause = () => (btn.style.display = "block");
