// todo gerar o jsonOwner
// todo salvar no localStorage o jsonOwner
// todo modularizar para conseguir criar testes unitários

window.onload = () => {
	const nameInput = document.getElementById("name-input");
	const emailInput = document.getElementById("email-input");
	const cpfInput = document.getElementById("cpf-input");
	const passwordInput = document.getElementById("password-input");
	const radiosInput = document.getElementsByName("gender");
	const submitBtn = document.getElementById("submit-btn");

	submitBtn.onclick = () => {
		const jsonOwner = {
			name: nameInput.value,
		};
		console.log(Array.from(radiosInput).find((radio) => radio.checked).value); // retorna o valor do radio selecionado
		console.log(jsonOwner);
	};
};
