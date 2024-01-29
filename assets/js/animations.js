document.addEventListener("DOMContentLoaded", () => {
	const paragraphs = Array.from(
		document.querySelectorAll("#about > div > div p")
	);
	let lastAnimatedTime = 0;

	const observer = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const currentTime = Date.now();

					let delay =
						lastAnimatedTime > 0
							? Math.max(0, 500 - (currentTime - lastAnimatedTime))
							: 0;
					entry.target.style.animationDelay = `${delay}ms`;

					entry.target.classList.add("fadeIn");
					lastAnimatedTime = currentTime + delay;

					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.1
		}
	);

	paragraphs.forEach(p => observer.observe(p));
});
