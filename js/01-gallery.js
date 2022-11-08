import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryImage = galleryItems.map((el) => 
    `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    /></a>
</div>`).join("");

galleryList.insertAdjacentHTML("beforeend", galleryImage);


const galleryItem = document.querySelector("div.gallery");

galleryItem.addEventListener("click", e => {
    e.preventDefault();

    if (e.target.nodeName !== "IMG") {
        return;
    };

    const modalDataAttribute = e.target.getAttribute("data-source");
    const instance = basicLightbox.create(
        `<img src="${modalDataAttribute}">`
    );
    instance.show();

    document.addEventListener("keydown", e => {
        if (e.code === "Escape") {
            instance.close();
        };
    });
});
