const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const slides = document.querySelectorAll(".quote-container");

let index = 0;
display(index);

function display (index) {
	slides.forEach((slide) => {
		slide.style.display = 'none';
	});
	slides[index].style.display = 'flex';
}

function nextSlide () {
	index++;
	if (index > slides.length - 1) {
		index = 0;
	}
	display(index);
}
function prevSlide () {
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	display(index);
}

leftBtn.addEventListener('click', nextSlide);
rightBtn.addEventListener('click', prevSlide);
