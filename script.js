window.onload = function() {
    const audio = document.getElementById("audio");

    // iOS yêu cầu tương tác từ người dùng để phát nhạc
    document.body.addEventListener("touchstart", function playAudio() {
        audio.play();
        document.body.removeEventListener("touchstart", playAudio);
    });

    // Tự động phát nhạc khi có thể
    audio.play().catch(error => {
        console.log("Trình duyệt chặn phát nhạc, chờ người dùng tương tác...");
    });
};

const vinyl = document.getElementById("vinyl");
const message = document.getElementById("message");

vinyl.addEventListener("click", function() {
    message.style.display = "block";
    message.innerHTML = "Chúc bạn iu ngày mới zui zẻ nha! Giờ ngủ một giấc dậy là chắc hết khó chịu rùi nhỉ. Những lúc em như này anh chẳng biết phải làm gì để an ủi em. Thui thì mong món quà nhỏ này sẽ làm em cảm thấy vui vẻ iu đời hơn. Dù có chuyện gì xảy ra anh cũng chỉ muốn em biết rằng anh lun iu thương và ủng hộ em ❤️";
});
