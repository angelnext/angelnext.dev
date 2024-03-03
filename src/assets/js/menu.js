document.addEventListener("astro:page-load", () => {
	document.addEventListener("DOMContentLoaded", () => {
		const mainMenu = document.getElementById("main-menu");
		const menuImage = document.getElementById("menu-image");
		const menuIcon = document.getElementById("menu-icon");

		menuImage.addEventListener("click", () => {
			const isMenuVisible = mainMenu.style.display === "block";

			mainMenu.style.display = isMenuVisible ? "none" : "block";

			const currentSrc = menuIcon.getAttribute("src");
			const newSrc =
				currentSrc === "/src/assets/img/menu.svg"
					? "/src/assets/img/close.svg"
					: "/src/assets/img/menu.svg";

			menuIcon.setAttribute("src", newSrc);
		});

		mainMenu.style.display = "none";
	});
});
