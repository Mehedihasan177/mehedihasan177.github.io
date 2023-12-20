function openPopup(imagePath) {
    // Set the source of the image
    document.getElementById('popupImage').src = imagePath;
  
    // Show the popup
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
  }
  