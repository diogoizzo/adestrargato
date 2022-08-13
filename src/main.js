const btn = document.getElementById("circulo");
const video = document.getElementById("video");
btn.addEventListener("click", (e) => {
    video.play();
});
video.onplay = () => (btn.style.display = "none");
video.onpause = () => (btn.style.display = "block");
