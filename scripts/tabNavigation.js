function initTabNavigation() {
	const tabs = Array.from(document.querySelectorAll("[data-tab]"));
	const contents = Array.from(document.querySelectorAll(".tab-content"));

	function activateTab(tab) {
		tabs.forEach((t) => {
			t.classList.toggle("active", t === tab);
			t.setAttribute("aria-selected", t === tab ? "true" : "false");
		});
	}

	function activateContent(content) {
		contents.forEach((c) => {
			c.classList.toggle("active", c.id === content.id);
		});
	}

	function handleClick(e) {
		const tab = e.target.closest("[data-tab]");
		const content = document.getElementById(tab.dataset.tab);

		if (tab && content) {
			activateTab(tab);
			activateContent(content);
		}
	}

	tabs.forEach((tab) => {
		tab.addEventListener("click", handleClick);
	});
}

export default initTabNavigation;
