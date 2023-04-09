class SlideStories {
	constructor(id) {
		this.slide = document.querySelector(`[data-slide = "${id}"]`);
		this.active = 0;
		this.init();
	}
	activeSlide(index) {
		const profileImg = document.querySelector(".profile-img-wrapper");

		function slideInit(slideId) {
			const slide = document.getElementById(slideId);
			if (slide) {
				slide.classList.add("ativo");

				slide.addEventListener("click", (e) => {
					if (e.target.id == slideId || e.target.className == "close-btn") {
						slide.classList.remove("ativo");
					}
				});
			}
		}

		profileImg.addEventListener("click", () => slideInit("slide-container"));

		this.active = index;
		this.items.forEach((item) => item.classList.remove("active"));
		this.items[index].classList.add("active");
		this.thumbItens.forEach((item) => item.classList.remove("active"));
		this.thumbItens[index].classList.add("active");
		this.autoSlide();
	}
	prev() {
		if (this.active > 0) {
			this.activeSlide(this.active - 1);
		} else {
			this.activeSlide(this.items.length - 1);
		}
	}

	next() {
		if (this.active < this.items.length - 1) {
			this.activeSlide(this.active + 1);
		} else {
			this.activeSlide(0);
		}
	}

	addNavigation() {
		const nextBtn = this.slide.querySelector(".slide-next");
		nextBtn.addEventListener("click", this.next);

		const prevBtn = this.slide.querySelector(".slide-prev");
		prevBtn.addEventListener("click", this.prev);
	}

	addthumbItems() {
		this.items.forEach(() => (this.thumb.innerHTML += "<span></span>"));
		this.thumbItens = Array.from(this.thumb.children);
	}

	autoSlide() {
		clearTimeout(this.timeOut);
		this.timeOut = setTimeout(this.next, 5000);
	}

	init() {
		this.next = this.next.bind(this);
		this.prev = this.prev.bind(this);
		this.items = this.slide.querySelectorAll(".slide-items > *");
		this.thumb = this.slide.querySelector(".slide-thumb");
		this.addthumbItems();
		this.activeSlide(0);
		this.addNavigation();
	}
}

export default SlideStories;
