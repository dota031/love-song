window.onload = function() {
    const audio = document.getElementById("audio");

    // Kích hoạt phát nhạc khi người dùng chạm vào màn hình trên iOS
    function enableAudio() {
        audio.muted = false;
        audio.play();
        document.body.removeEventListener("touchstart", enableAudio);
        document.body.removeEventListener("click", enableAudio);
    }

    document.body.addEventListener("touchstart", enableAudio);
    document.body.addEventListener("click", enableAudio);

    // Tự động phát nhạc nếu trình duyệt cho phép
    audio.play().then(() => {
        console.log("Nhạc tự động phát thành công.");
    }).catch(error => {
        console.log("Trình duyệt chặn autoplay, chờ người dùng tương tác...");
    });
};

// Xử lý sự kiện khi nhấn vào đĩa nhạc
const vinyl = document.getElementById("vinyl");
const message = document.getElementById("message");
const clickMessage = document.getElementById("click-message");

vinyl.addEventListener("click", function() {
    message.style.display = "block"; // Hiện thư tình
    message.innerHTML = "Gửi em, tình yêu của anh... ❤️";
    clickMessage.style.display = "none"; // Ẩn dòng chữ hướng dẫn
});
