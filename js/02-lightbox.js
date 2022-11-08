import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryImg = document.querySelector('.gallery');

const galleryViaSLB = galleryItems
.map(({preview,original,description}) => 
`<li class = "gallery__item">
<a class = "gallery__item" href = "${original}">
<img class = "gallery__image"
  src = "${preview}"
  alt = "${description}"/>
</a></li>`).join("");

galleryImg.insertAdjacentHTML('afterbegin', galleryViaSLB);

 new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});