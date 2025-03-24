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
    message.innerHTML = "Chúc bạn iu ngày mới zui zẻ nha! Giờ ngủ một giấc dậy là chắc hết khó chịu rùi nhỉ. Những lúc em như này anh chẳng biết phải làm gì để an ủi em. Thui thì mong món quà nhỏ này sẽ làm em cảm thấy vui vẻ iu đời hơn. Dù có chuyện gì xảy ra anh cũng chỉ muốn em biết rằng anh lun iu thương và ủng hộ em ❤️";
    clickMessage.style.display = "none"; // Ẩn dòng chữ hướng dẫn
});
