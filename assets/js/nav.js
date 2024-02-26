const navbar = document.getElementById("nav");

function shrinkNavbar(scrollTop) {
	const navbar = document.getElementById("nav");

	navbar.style.width = "calc(50% - " + (scrollTop * 2).toString() + "px)";
	navbar.style.left = "calc(25% + 0.5rem - " + scrollTop.toString() + "px)";

	if (navbar.offsetWidth <= navbar.offsetHeight) {
		navbar.style.width = "calc(" + navbar.offsetHeight.toString() + "px - 2rem";
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
	shrinkNavbar(window.scrollY || window.pageYOffSet || 0);
}
