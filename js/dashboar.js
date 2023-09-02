window.onload = function () {
	givePositionToMain();
	// selectContent();
	(function () {
		'[data-toggle="tooltip"]'.tooltip();
	});
};

function givePositionToMain() {
	let heightHeader = document.getElementsByTagName("header")[0].offsetHeight;
	let heightMain = (document.getElementsByClassName(
		"bd-layout"
	)[0].style = `position: absolute; top: ${heightHeader}px; height: calc(100vh - ${heightHeader}px);`);
}

window.addEventListener("resize", function () {
	givePositionToMain();
});

window.addEventListener("click", function (e) {
	const target = e.target.attributes.href.value;
	let elementShow = document.querySelectorAll("div[data-show]");

	for (const key of elementShow) {
		console.log(key.classList.contains("d-none"));
		if (!key.classList.contains("d-none")) {
			key.classList.add("d-none");
			console.log(key);
			// añadir el atributo data-show con el valor true cuando se muestra y cuando no que sea false
		}
		console.log(key.classList.contains("d-none"));
		console.log(target);
	}
	if (document.querySelector(target).classList.contains("d-none")) {
		document.querySelector(target).classList.remove("d-none");
	}
});

// function selectContent() {

// }
