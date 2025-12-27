var url = window.location.href;
var id = 'qrcode';
console.log('■■■■■■■■■■■■■ url=', url);

 

function copyurl() {

    alert('url copied to clipboard: ' + url);
}


// Get the URL you want to encode
const websiteUrl = url; 
// const websiteUrl = "https://example.com"; 

// Create a new QRCode instance
// The first argument is the ID of the HTML element where the QR code will be rendered
// The second argument is an object with configuration options
var qrcode = new QRCode(document.getElementById(id), {
    text: websiteUrl,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H // High error correction
});


function copyCurrentUrl() {
  // Get the current page URL
  let currentUrl = window.location.href;
  const messageElement = document.getElementById('message');

  // Use the Clipboard API to write the text
  navigator.clipboard.writeText(currentUrl)
    .then(() => {
      // Success feedback
      messageElement.textContent = 'URL copied!';
      // Optional: Hide the message after a few seconds
      setTimeout(() => {
        messageElement.textContent = '';
      }, 2000);
    })
    .catch(err => {
      // Error handling
      console.error('Could not copy URL: ', err);
      messageElement.textContent = 'Failed to copy URL.';
    });

}

 