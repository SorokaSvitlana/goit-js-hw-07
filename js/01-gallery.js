import { galleryItems } from './gallery-items.js';
// Change code below this line

const basicLightbox = window.basicLightbox;
let instance = null;

const listEl = document.querySelector('.gallery')
const galleryImgEls = document.querySelectorAll('.gallery__img');


const makeGalleryCard = ({
    preview,
    original,
    description,
  }) => `    <div class="gallery__item">
  <a class="gallery__link" href ='${original}'>
  <img class='gallery__image' src='${preview}' alt='${description}' data-source='${original}'>
  </a>
  </div>`;
  
  const markup = galleryItems.map((data) => makeGalleryCard(data)).join('');
  
  listEl.insertAdjacentHTML('afterbegin', markup);

  listEl.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
      return;
    }
  
    const modalImg = event.target.dataset.source;

  
    instance = basicLightbox.create(
      `<img src="${modalImg}" width="800" height="600">`
    );
  
    instance.show();
    
  });

  listEl.addEventListener('keydown', (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });