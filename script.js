// Get the modal element
const modal = document.getElementById("image-modal");

// Get all artwork elements
const artworks = document.getElementsByClassName("artwork");

// Get the modal image element
const modalImg = document.getElementById("modal-image");

// Get the caption element
const caption = document.getElementById("caption");

// Get the close button
const closeButton = document.querySelector(".close");

// Loop through all artwork elements and add a click event listener
for (let i = 0; i < artworks.length; i++) {
    artworks[i].addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.dataset.full;
        caption.innerHTML = this.alt;
    });
}

// Add a click event listener to close the modal
closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});
