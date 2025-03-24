window.onload = function() {
    const audio = document.getElementById("audio");

    function enableAudio() {
        audio.muted = false;
        audio.play();
        document.body.removeEventListener("touchstart", enableAudio);
        document.body.removeEventListener("click", enableAudio);
    }

    document.body.addEventListener("touchstart", enableAudio);
    document.body.addEventListener("click", enableAudio);

    audio.play().catch(error => {
        console.log("Trình duyệt chặn autoplay, chờ người dùng tương tác...");
    });
};

const vinyl = document.getElementById("vinyl");
const message = document.getElementById("message");
const clickMessage = document.getElementById("click-message");

vinyl.addEventListener("click", function() {
    message.style.display = "block";
    message.innerHTML = "Gửi em, tình yêu của anh... ❤️";
    clickMessage.style.display = "none"; // Ẩn dòng chữ hướng dẫn
});
