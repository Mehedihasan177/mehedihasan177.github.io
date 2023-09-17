// Get references to the image and the popup elements
var image = document.getElementById('myImage');
var overlay = document.getElementById('imageOverlay');
var closePopup = document.getElementById('closePopup');

// Function to open the popup
image.onclick = function() {
    overlay.style.display = 'block';
}

// Function to close the popup when clicking the close button
closePopup.onclick = function() {
    overlay.style.display = 'none';
}

// Function to close the popup when clicking outside the popup
overlay.onclick = function(event) {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
}
