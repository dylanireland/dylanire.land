const navbar = document.getElementById("nav");

function shrinkNavbar(scrollTop, navbarWidth) {
	const navbar = document.getElementById("nav");

	const navPadding = window
		.getComputedStyle(navbar)
		.getPropertyValue("padding");

	navbar.style.width = `calc(${navbarWidth}% - ${(
		scrollTop * 2
	).toString()}px)`;
	const leftPercentage = (100 - navbarWidth) / 2;
	navbar.style.left = `calc(${leftPercentage}% - ${scrollTop.toString()}px)`;
	const distanceLeft = window
		.getComputedStyle(navbar)
		.getPropertyValue("left")
		.slice(0, -2);
	const remSize = window
		.getComputedStyle(navbar)
		.getPropertyValue("font-size")
		.slice(0, -2);
	if (distanceLeft < remSize * 2) {
		navbar.style.left = "2rem";
	}

	if (navbar.offsetWidth <= navbar.offsetHeight) {
		navbar.style.width = `calc(${navbar.offsetHeight.toString()}px - 2rem`;
		navbar.style.left = "2rem";
		return;
	}
}

window.onload = () => {
	scrollingFunctions();
};

window.onresize = () => {
	scrollingFunctions();
};

window.onscroll = () => {
	scrollingFunctions();
};

function scrollingFunctions() {
	const navbarWidth = getNavbarWidth();
	shrinkNavbar(window.scrollY || window.pageYOffSet || 0, navbarWidth);
}

function getNavbarWidth() {
	const ratio = window.innerWidth / window.innerHeight;
	console.log(ratio);
	let width = 50;
	if (ratio < 3 / 4) {
		width = 80;
	} else if (ratio < 1) {
		width = 70;
	}
	return width;
}
