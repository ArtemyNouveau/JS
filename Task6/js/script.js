const album = document.querySelector ('.album');
const galleryItem = document.querySelector('.galleryItem').content;
let mainImage = document.querySelector('.img');
let cells = 100;
let cell = 1;

const renderItems = function () {
	let newItem;
	let roulette = document.createDocumentFragment();

	for (let i = 1; i <= cells; i++) {
		newItem = galleryItem.cloneNode(true);
		newItem.querySelector('.imgThumb').classList.add('gThumb');
		newItem.querySelector('.imgThumb').classList.add('thumb' + i);
		newItem.querySelector('.imgThumb').style.backgroundImage = `url('img/background-${i}.JPG')`;
		roulette.appendChild(newItem);

		let img = new Image();
		img.src = `img/background-${i}.JPG`;
		img.onerror = function () {
			cells--;
			let remove = document.querySelector('.thumb' + i);
			remove.parentNode.removeChild(remove);
		};
	}
	album.appendChild(roulette);
};

renderItems ();

const galleryApp = function (evt) {
	if (evt.target.classList.contains('gThumb')) {
		cell = +evt.target.style.backgroundImage.match(/[0-9]+/g);
	}
	if (evt.target.classList.contains('right') && ++cell > cells) {
		cell = 1;
	}
	if (evt.target.classList.contains('left') && --cell < 1) {
		cell = cells;
	}
	mainImage.style.backgroundImage = `url('img/background-${cell}.JPG')`;
};

window.addEventListener ('click', galleryApp);