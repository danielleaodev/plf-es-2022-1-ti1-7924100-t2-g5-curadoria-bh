// // todo gerar o jsonOwner
// // todo salvar no localStorage o jsonOwner
// todo modularizar para conseguir criar testes unitários
// todo criar validações para os campos

function getRadioValue() {
	const radiosInput = document.getElementsByName("gender");
	const checkedRadio = Array.from(radiosInput).find((radio) => radio.checked);

	if (checkedRadio === undefined) {
		return "";
	}
	return checkedRadio.value;
}

window.onload = () => {
	let owners = localStorage.getItem("owners");
	owners = owners ? JSON.parse(owners) : [];

	const nameInput = document.getElementById("name-input");
	const emailInput = document.getElementById("email-input");
	const cpfInput = document.getElementById("cpf-input");
	const passwordInput = document.getElementById("password-input");
	const submitBtn = document.getElementById("submit-btn");

	submitBtn.onclick = () => {
		const jsonOwner = {
			name: nameInput.value,
			email: emailInput.value,
			cpf: cpfInput.value,
			password: passwordInput.value,
			gender: getRadioValue(),
		};
		owners.push(jsonOwner);

		localStorage.setItem("owners", JSON.stringify(owners));

		console.log(owners);

		window.location.replace(
			"/codigo/places-owners-registration/placeForms.html"
		);
	};
};
