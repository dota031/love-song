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
    message.innerHTML = "Chúc bạn iu ngày mới zui zẻ nha! Giờ ngủ một giấc dậy là chắc hết khó chịu rùi nhỉ. Những lúc em như này anh chẳng biết phải làm gì để an ủi em. Thui thì mong món quà nhỏ này sẽ làm em cảm thấy vui vẻ iu đời hơn khi thức dậy. Dù có chuyện gì xảy ra anh cũng chỉ muốn em biết rằng anh lun iu thương và ủng hộ em ❤️...";
});
