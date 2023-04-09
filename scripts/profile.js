function initProfile() {
	const header = document.getElementById("profile");
	const form = document.getElementById("form");
	const loading = document.querySelector(".loading-wrapper");
	const imagePreview = document.getElementById("image-preview");
	const input = document.querySelector("input[type=file]");

	function renderProfile(profile) {
		if (!profile) {
			return;
		}

		const { name, age, location, bio, image } = profile;
		const imageSrc = image.name.length > 0 ? URL.createObjectURL(image): "assets/img/img1.jpg";

		header.innerHTML = `
      <div class="profile-img-wrapper">
        <img class="profile-image" src="${imageSrc}" alt="">
      </div>
      <div class="profile-info">
        <h1 class="name">${name}, <span>${age} ${age > 1 ? "anos" : "ano"}</span></h1>
        <h2 class="location">
          <img class="svg" src="./assets/icons/location.svg">
          <span>${location}</span>
        </h2>
        <ul class="stats-list">
          <li class="stats-item"><span>252</span>publicações</li>
          <li class="stats-item"><span>17.7K</span>seguidores</li>
          <li class="stats-item"><span>62</span>seguindo</li>
        </ul>
        <p class="bio">${bio}</p>
      </div>
    `;
	}

	function handleImagePreview() {
		input.addEventListener("change", (e) => {
			const file = URL.createObjectURL(e.target.files[0]);

			imagePreview.src = file;
			imagePreview.classList.add("image-preview");
		});
	}

	function handleSubmitForm() {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			const formData = new FormData(form);
			const name = formData.get("name");
			const age = formData.get("age");
			const location = formData.get("location");
			const bio = formData.get("bio");
			const image = formData.get("image");

			renderProfile({ name, age, location, bio, image });

			loading.classList.add("active");
			setTimeout(() => {
				imagePreview.src = "";
				imagePreview.classList.remove("image-preview");
				loading.classList.remove("active");
			}, 500);
		});
	}

	handleImagePreview();
	handleSubmitForm();
}

export default initProfile;
