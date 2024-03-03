document.addEventListener("astro:page-load", () => {
	function animate() {
		const animates = document.querySelectorAll(".animate");

		for (const a of animates) {
			const windowHeight = window.innerHeight;
			const elementTop = a.getBoundingClientRect().top;
			const elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				a.classList.add("active");
			} else {
				a.classList.remove("active");
			}
		}
	}

	window.addEventListener("scroll", animate);
});
