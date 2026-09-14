const carouselTrack = document.querySelector('.carousel-track');
const currentSlideLabel = document.querySelector('.current-slide');
const totalSlidesLabel = document.querySelector('.total-slides');
const carouselButtons = document.querySelectorAll('.carousel-button');
const gallery = document.querySelector('.gallery-grid');

let slides = [];
let activeSlide = 0;

const bannerImages = [
	'img1.png',
	'img2.png',
	'img3.jpg',
	'img4.jpg',
	'img5.jpg',
	'img6.jpg',
	'img7.jpg',
	'img8.jpg',
	'img9.jpg'
];

function updateCarouselStatus() {
	if (!slides.length) return;
	currentSlideLabel.textContent = String(activeSlide + 1).padStart(2, '0');
	totalSlidesLabel.textContent = String(slides.length).padStart(2, '0');
}

function showSlide(index) {
	if (!slides.length) return;
	activeSlide = (index + slides.length) % slides.length;
	slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeSlide));
	updateCarouselStatus();
}

function renderBanner() {
	carouselTrack.innerHTML = '';
	bannerImages.forEach((imageName, index) => {
		const slide = document.createElement('figure');
		slide.className = `slide ${index === 0 ? 'is-active' : ''}`;
		slide.innerHTML = `<img src="imeges/${imageName}" alt="Projeto em destaque ${index + 1}">`;
		carouselTrack.appendChild(slide);
	});
	slides = document.querySelectorAll('.slide');
	activeSlide = 0;
	updateCarouselStatus();
}

carouselButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const direction = button.dataset.direction === 'next' ? 1 : -1;
		showSlide(activeSlide + direction);
	});
});

renderBanner();
setInterval(() => showSlide(activeSlide + 1), 5000);

const imageNames = [
	'img1.png',
	'img2.png',
	'img3.jpg',
	'img4.jpg',
	'img5.jpg',
	'img6.jpg',
	'img7.jpg',
	'img8.jpg',
	'img9.jpg'
];

function shuffle(images) {
	return [...images].sort(() => Math.random() - 0.5);
}

shuffle(imageNames).forEach((imageName, index) => {
	const item = document.createElement('figure');
	item.className = 'gallery-item';
	item.innerHTML = `
		<img src="imeges/${imageName}" alt="Trabalho selecionado ${index + 1}" loading="lazy">
		<figcaption class="gallery-label">Projeto ${String(index + 1).padStart(2, '0')}</figcaption>
	`;
	gallery.appendChild(item);
});
