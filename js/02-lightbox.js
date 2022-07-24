import { galleryItems } from './gallery-items.js';
const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems.map(item => 
    `<a class="gallery__item" href="${item.original}" >
         <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            title="${item.description}"
            />
      </a>`
      )
      .join(" ");

gallery.insertAdjacentHTML("afterbegin", galleryElements);

new SimpleLightbox(".gallery a", { captionDelay: 250 });