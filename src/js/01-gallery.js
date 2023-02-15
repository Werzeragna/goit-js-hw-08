import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach(item => {
  galleryEl.insertAdjacentHTML('beforeend',
    `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>`)
})

var lightbox = new SimpleLightbox('.gallery a',
  { captionsData: 'alt', captionPosition: 'bottom', captionDelay: '250' });
