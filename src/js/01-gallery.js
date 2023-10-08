// Add imports above this line
// Change code below this line

import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";


document.addEventListener('DOMContentLoaded', function () {
  // Tu código aquí
  const galleryImages = (item) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>`
   
}


const itemContainer = document.querySelector(".gallery");
for (const item of galleryItems) {
  const newItem = galleryImages(item);
  itemContainer.innerHTML += newItem;
}

// Inicializa SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a');

itemContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName === "IMG") {
    // Abre SimpleLightbox
    lightbox.open();
  }
});

// Cierra SimpleLightbox con la tecla Escape
const closeEsc = (event) => {
  if (event.key === "Escape") {
    lightbox.close();
  }
};
document.addEventListener("keydown", closeEsc);
});


