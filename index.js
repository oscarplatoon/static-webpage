const slides = document.getElementsByClassName('carousel-image');
const startLogo = document.getElementById('start-image');
const boxDesc = document.getElementById('box-desc');
const boxPic = document.getElementById('box-pic');
const header = document.getElementById('header');

let slideIndex = 0;
function showSlides() {
	if (slideIndex > slides.length - 1) {
		slideIndex = 0;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = 'block';
	slideIndex++;
	setTimeout(showSlides, 5000);
}

const headerFunc = () => {
	let y = window.scrollY;

	if (y >= 942) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
}

const init = () => {
	showSlides();

	// startLogo
	startLogo.addEventListener('mouseenter', () => {
		startLogo.style.opacity = 1;
	})
	startLogo.addEventListener('mouseleave', () => {
		startLogo.style.opacity = 0.5;
	})

	window.addEventListener('scroll', () => {
		let y = window.scrollY;
		if (y >= 300) {
			boxDesc.className = 'show';
		} else {
			boxDesc.className = 'hide';
		}
	})

	window.addEventListener('scroll', () => {
		let y = window.scrollY;
		if (y >= 420) {
			boxPic.className = 'show';
		} else {
			boxPic.className = 'hide';
		}
	})

	window.addEventListener('scroll', headerFunc);
}

init();