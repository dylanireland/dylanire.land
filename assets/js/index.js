function relocate(loc) {
	if (loc === "/") {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	} else if (loc.startsWith("#")) {
		const element = document.querySelector(loc);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth"
			});
		}
	}
}

function openLink(project) {
	let location = "about:blank";
	switch (project) {
		case "balloon":
			location = "https://balloon.trading";
			break;
		case "jukebox":
			location = "https://jukebox.wtf";
			break;
		case "dappdev":
			location =
				"https://youtube.com/playlist?list=PL8oWxbJ-csEqjX2A1pprKuHzCBS8RMcmR&si=9ux-QOpjUKAJDame";
			break;
		case "aero":
			location = "https://pittsburghaero.com";
			break;
		case "github":
			location = "https://github.com/dylanireland";
			break;
		case "linkedin":
			location = "https://linkedin.com/in/dylanireland/";
			break;
		case "medium":
			location = "https://medium.com/@dylan.ireland777";
			break;
		case "x":
			location = "https://twitter.com/DylanIrel";
			break;
		default:
			break;
	}
	window.open(location, "_blank");
}
