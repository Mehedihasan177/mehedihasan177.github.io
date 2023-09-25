    // Function to display the full-size image
    function showImage(imageSrc) {
        var overlay = document.getElementById('imageOverlay');
        var fullImage = document.getElementById('fullImage');
        
        fullImage.src = imageSrc;
        overlay.style.display = 'flex'; // Show the overlay
    }
    
    // Function to close the full-size image overlay
    function closeImage() {
        var overlay = document.getElementById('imageOverlay');
        overlay.style.display = 'none'; // Hide the overlay
    }
    
    // Close the overlay when clicking anywhere outside the image
    var overlay = document.getElementById('imageOverlay');
    overlay.addEventListener('click', closeImage);