const toggleMobileMenu = () => {
	document.querySelector("#mobile-menu")?.classList.toggle("hidden");
	document.querySelector("#mobile-menu")?.classList.toggle("flex");
	document.querySelector("#close")?.classList.toggle("hidden");
	document.querySelector("#hamburger")?.classList.toggle("hidden");
};

document.querySelector("#hamburger")?.addEventListener("click", () => {
	toggleMobileMenu();
});

document.querySelector("#close")?.addEventListener("click", () => {
	toggleMobileMenu();
});

document.querySelectorAll("#mobile-menu li").forEach((e) => {
	e.addEventListener("click", () => {
		toggleMobileMenu();
	});
});
document.documentElement.classList.toggle(
	"dark",
	localStorage.theme === "dark" ||
		(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);

document.querySelectorAll("#theme-toggle").forEach((e) => {
	e.addEventListener("click", () => {
		document.documentElement.classList.toggle("dark");
		localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
	});
});

window.addEventListener("resize", () => {
	if (
		window.innerWidth >= 1024 &&
		!document.querySelector("#mobile-menu")?.classList.contains("hidden")
	) {
		toggleMobileMenu();
	}
});
