const gallery = document.querySelector('.gallery');
const fullImageContainer = document.querySelector('.full-image-container');
const fullImage = document.querySelector('.full-image');
const images = gallery.querySelectorAll('.image');

let currentImageIndex = 0;

function showFullImage(index) {
  const imageUrl = images[index].src;
  fullImage.src = imageUrl;
  fullImageContainer.style.display = 'block';
}

function hideFullImage() {
  fullImageContainer.style.display = 'none';
  fullImage.src = '';
}

function navigateGallery(event) {
  if (event.key === 'ArrowLeft') {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showFullImage(currentImageIndex);
  } else if (event.key === 'ArrowRight') {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showFullImage(currentImageIndex);
  } else if (event.key === 'Escape') {
    hideFullImage();
  }
}

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageIndex = index;
    showFullImage(currentImageIndex);
  });
});

fullImageContainer.addEventListener('click', hideFullImage);
document.addEventListener('keydown', navigateGallery);




const inputAmount = document.querySelector('#inputAmount');
const renderBtn = document.querySelector('#renderBtn');
const destroyBtn = document.querySelector('#destroyBtn');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = '30px';
    box.style.backgroundColor = getRandomColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}

renderBtn.addEventListener('click', () => {
  const amount = inputAmount.value;
  createBoxes(amount);
});

destroyBtn.addEventListener('click', destroyBoxes);