window.onload = function () {
	givePositionToMain();
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
	if (document.querySelector(target).hasAttribute("data-show")) {
		let elementShow = document.querySelectorAll("div[data-show]");

		for (const key of elementShow) {
			if (!key.classList.contains("d-none")) {
				key.classList.add("d-none");
				key.setAttribute("data-show", "false");
			}
		}
		if (document.querySelector(target).classList.contains("d-none")) {
			document.querySelector(target).classList.remove("d-none");
		}
	}
});
