import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector(".gallery");

function markup(arr) {
    return arr
        .map(
            ({ preview, original, description }) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`)
        .join("");
}
galleryList.insertAdjacentHTML("beforeend", markup(galleryItems));


console.log(galleryItems);
// ініціалізація бібліотеки Lightbox:
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250,
});