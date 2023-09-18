var modal = document.getElementById("myModal");
        var modalImage = document.getElementById("modalImage");

        // Get the text link that opens the modal
        var openModalLink = document.getElementById("openModal");

        // Get the close button in the modal
        var closeModalButton = document.getElementById("closeModal");

        // When the user clicks the text link, open the modal and set the image source
        openModalLink.addEventListener("click", function() {
            modal.style.display = "block";
            modalImage.src = "images/doctor_mediaid.png";
        });

        // When the user clicks the close button, close the modal
        closeModalButton.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // When the user clicks outside the modal, close it
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });