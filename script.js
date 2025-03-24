const audio = document.getElementById("audio");
const vinyl = document.getElementById("vinyl");
const message = document.getElementById("message");
const clickMessage = document.getElementById("click-message");

let isPlaying = false; // Kiểm tra trạng thái phát nhạc

function enableAudio() {
    audio.muted = false;
    document.body.removeEventListener("touchstart", enableAudio);
    document.body.removeEventListener("click", enableAudio);
}

document.body.addEventListener("touchstart", enableAudio);
document.body.addEventListener("click", enableAudio);

// Xử lý khi nhấn vào đĩa nhạc
vinyl.addEventListener("click", function() {
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            vinyl.classList.add("spinning"); // Bắt đầu quay đĩa
            message.style.display = "block"; // Hiện thư tình
            message.innerHTML = "Gửi em, tình yêu của anh... ❤️";
            clickMessage.style.display = "none"; // Ẩn dòng chữ hướng dẫn
        }).catch(error => {
            console.log("Lỗi khi phát nhạc:", error);
        });
    }
});
