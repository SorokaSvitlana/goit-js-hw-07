import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery')
const galleryImgEls = document.querySelectorAll('.gallery__img');


const makeGalleryCard = ({
    preview,
    original,
    description,
  }) => `<li> <a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}'/>
</a> </li>`;
  
  const markup = galleryItems.map((data) => makeGalleryCard(data)).join('');
  
  listEl.insertAdjacentHTML('beforeend', markup);

  var lightbox = new SimpleLightbox(".gallery a", {
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  });