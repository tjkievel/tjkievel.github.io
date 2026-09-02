const slides = document.querySelectorAll('.slide');
const currentSlideLabel = document.querySelector('.current-slide');
const carouselButtons = document.querySelectorAll('.carousel-button');
const gallery = document.querySelector('.gallery-grid');

let activeSlide = 0;

function showSlide(index) {
	activeSlide = (index + slides.length) % slides.length;
	slides.forEach((slide, slideIndex) => slide.classList.toggle('is-active', slideIndex === activeSlide));
	currentSlideLabel.textContent = String(activeSlide + 1).padStart(2, '0');
}

carouselButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const direction = button.dataset.direction === 'next' ? 1 : -1;
		showSlide(activeSlide + direction);
	});
});

setInterval(() => showSlide(activeSlide + 1), 5000);

const imageNames = Array.from({ length: 9 }, (_, index) => `img${index + 1}.jpg`);

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
