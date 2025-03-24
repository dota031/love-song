const vinyl = document.getElementById("vinyl");
const message = document.getElementById("message");
const audio = document.getElementById("audio");
let isPlaying = false;

vinyl.addEventListener("click", function() {
    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    } else {
        audio.pause();
        isPlaying = false;
    }
    message.style.display = "block";
    message.innerHTML = "Gửi em, tình yêu của anh... ❤️";
});
