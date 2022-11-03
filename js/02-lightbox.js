import { galleryItems } from './gallery-items.js';


console.log(galleryItems);
const galleryContainerEl = document.querySelector('.gallery'); // !

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup); // !


function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
     <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
    `;
    })
    .join('');
}

galleryContainerEl.addEventListener('click', openModal);


function openModal(event) {
  event.preventDefault();
}



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});