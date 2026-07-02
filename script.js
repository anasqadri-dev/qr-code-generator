const imageBox = document.getElementById("img-box");
const qrImage = document.getElementById("qr-img");
const qrText = document.getElementById("qr-text");

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
    imageBox.classList.add("show-image");
  } else {
    qrText.classList.add("error");
    imageBox.classList.remove("show-image");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
qrText.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    generateQR();
  }
});