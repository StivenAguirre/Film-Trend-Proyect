// Add imports above this line
// Change code below this line


import { galleryItems } from './gallery-items.js';

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

 };
 itemContainer.addEventListener("click", (event) => {
  event.preventDefault();
      const instance = basicLightbox.create(`
          <img src="${event.target.dataset.source}" alt="${event.target.alt}" />
      `);
      
      instance.show();

      const closeEsc = (event) => {
          if (event.key === "Escape") {
            instance.close();
            document.removeEventListener("keydown", closeEsc);
          }
      };
      document.addEventListener("keydown", closeEsc);
  }
);