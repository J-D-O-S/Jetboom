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
			// posible cambio para mayuscula
			991: {
				slidesPerView: 3
			}
		}
	});

	loadHeader();
	loadFooter();
};

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
	const contentHeader = /* html */ ` <div class="menu">
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
			<img src="assets/img/menu-min.webp" alt="Icono del menú" loading="lazy" />
		</label>
		<nav class="navbar">
			<ul>
				<li>
					<a href="/index.html">Inicio</a>
				</li>
				<li>
					<a href="#">Servicios</a>
				</li>
				<li>
					<a href="#">Comunidad</a>
				</li>
				<li>
					<a href="#">Retos</a>
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
	let contentFooter = /* html */ `<div class="parners">
			<ul>
				<li>
					<a href="/htmls/contact.html">Contactanos</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="#">Acerca de</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="#">PQRs</a>
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
					<a href="https://www.facebook.com/">
						<i class="fa-brands fa-facebook"></i>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="https://twitter.com">
						<i class="fa-brands fa-twitter"></i>
					</a>
				</li>
			</ul>
			<ul>
				<li>
					<a href="https://www.instagram.com">
						<i class="fa-brands fa-instagram"></i>
					</a>
				</li>
			</ul>
		</div>`;
	footer.insertAdjacentHTML("afterbegin", contentFooter);
}
