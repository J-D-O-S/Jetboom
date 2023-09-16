window.onload = (e) => {
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		centeredSlides: true,
		loop: true,
		spaceBetween: 30,
		grabCursor: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		breakpoints: {
			991: {
				slidesPerView: 3
			}
		}
	});

	const pagesWithoutFooter = [
		"/htmls/error404.html",
		"/htmls/error500.html",
		"/htmls/services.html",
		"/htmls/comunity.html"
		// "/htmls/aboutUs.html"
	];

	const pagesWithoutRandomImage = [
		"/htmls/error404.html",
		"/htmls/error500.html"
		// "/htmls/aboutUs.html"
	];

	loadHeader();
	const path = window.location.pathname;
	console.log(!pagesWithoutFooter.includes(path), " footer");
	console.log(!pagesWithoutRandomImage.includes(path), " image");
	if (!pagesWithoutFooter.includes(path)) {
		loadFooter();
	}
	if (!pagesWithoutRandomImage.includes(path)) {
		randomImage();
	}
};

function randomImage() {
	const imgs = [
		"/assets/img/1.webp",
		"/assets/img/2.webp",
		"/assets/img/3.webp",
		"/assets/img/4.webp",
		"/assets/img/5.webp",
		"/assets/img/6.webp",
		"/assets/img/7.webp",
		"/assets/img/8.webp",
		"/assets/img/9.webp",
		"/assets/img/10.webp"
	];
	const imgBackground = document.querySelector(".background");
	imgBackground.style.backgroundImage = imgBackground.classList.contains("bg-dark")
		? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${
				imgs[Math.floor(Math.random() * imgs.length)]
		  })`
		: `url(${imgs[Math.floor(Math.random() * imgs.length)]})`;
	imgBackground.style.backgroundSize = "cover";
	imgBackground.style.backgroundPosition = "center";
}

document.addEventListener("click", (event) => {
	if (event.target.id == "error404" || event.target.id == "error500") {
		window.location.href = "/index.html";
	}
});

function loadHeader() {
	const dic = {
		icon: "login",
		text: "Iniciar sesión",
		urlHTML: "/htmls/login.html"
	};
	if (window.location.pathname.includes("login")) {
		dic.icon = "person";
		dic.text = "Crear cuenta";
		dic.urlHTML = "/htmls/createAccount.html";
	}
	const header = document.querySelector("#header");
	const contentHeader = ` <div class="menu">
		<a href="/index.html" class="logo">
			<figure>
				<img
					src="/assets/img/Logotipo Verde-min.webp"
					alt="JetBoom logo"
					class="logo-img"
					loading="lazy"
				/>
			</figure>
		</a>
		<label for="menu">
			<input type="checkbox" id="menu" />
			<img src="/assets/img/menu-min.webp" alt="Icono del menú" loading="lazy" />
		</label>
		<nav class="navbar">
			<ul>
				<li>
					<a href="/index.html">Inicio</a>
				</li>
				<li>
					<a href="/htmls/services.html">Servicios</a>
				</li>
				<li>
					<a href="/htmls/comunity.html">Comunidad</a>
				</li>
				<li>
					<a href="${dic.urlHTML}">
						<figure class="logIn">
							<span class="material-symbols-outlined">${dic.icon}</span>
							<figcaption>${dic.text}</figcaption>
						</figure>
					</a>
				</li>
			</ul>
		</nav>
	</div>`;
	header.insertAdjacentHTML("afterbegin", contentHeader);
}

function loadFooter() {
	const footer = document.querySelector("#footer");
	let contentFooter = `<div class="parners">
			<ul>
				<li>
					<a href="/htmls/contact.html">Contactanos</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/htmls/aboutUs.html">Acerca de</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/index.html">Inicio</a>
				</li>
			</ul>
		</div>
		<div class="divition"></div>
		<div class="icons">
			<ul>
				<li>
					<a href="/htmls/error404.html" target="_blank" > 
						<i class="fa-brands fa-facebook"></i>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/htmls/error500.html" target="_blank" >
						<i class="fa-brands fa-twitter"></i>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="/htmls/dashBoard.html" target="_blank">
						<i class="fa-brands fa-instagram"></i>
					</a>
				</li>
			</ul>
		</div>`;
	footer.insertAdjacentHTML("afterbegin", contentFooter);
}

export { loadHeader, loadFooter };

(function () {
	"use strict";
	var forms = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(forms).forEach(function (form) {
		form.addEventListener(
			"submit",
			function (event) {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();
