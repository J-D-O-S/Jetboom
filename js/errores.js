import { loadHeader, loadFooter } from "./index.js";

window.onload = function () {
	if (window.location.pathname == "/htmls/error404.html") {
		backgroundErrors(1);
	} else if (window.location.pathname == "/htmls/error500.html") {
		backgroundErrors(2);
	}

	loadHeader();
	loadFooter();
};

function backgroundErrors(numImage) {
	const imgBackground = document.querySelector(".background");
	imgBackground.style.backgroundImage = `url(/assets/img/desierto${numImage}.webp)`;
	imgBackground.style.backgroundSize = "cover";
	imgBackground.style.backgroundPosition = "center";
}
