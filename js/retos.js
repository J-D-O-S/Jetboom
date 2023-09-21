window.onload = (e) => {
	// cargar imagenes de la ruta ./assets/img/v2/*.webp

	// cargar el tamaño de las imagenes
	const img = document.querySelector(".img-fluid");
	const imgWidth = img.width;
	const imgHeight = img.height;
	console.log(imgWidth, imgHeight);
	// cargar el tamaño de la pantalla
	const screenWidth = window.innerWidth;
	const screenHeight = window.innerHeight;
	console.log(screenWidth, screenHeight);
};
