var url = window.location.href;
console.log('url=', url);

function generateQRCode(text, elementId) {
    var qrcode = new QRCode(document.getElementById(elementId), {
        text: text,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}