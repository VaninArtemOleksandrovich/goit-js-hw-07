import { galleryItems } from './gallery-items.js';


const galleryContainerEl = document.querySelector('.gallery');// !

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);// !



function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
    `;
    })
    .join('');
};

galleryContainerEl.addEventListener('click', openModal);

// ! 2. Реалізація делегування на div.gallery і отримання url великого зображення + відключення переходу на нову сторінку при кліку на лінк
function openModal(event) {
  event.preventDefault();

  if (event.target.tagName !== "IMG") {
    return;
  }

  const dataSource = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${dataSource}">`,
  );
 
  instance.show();
}


