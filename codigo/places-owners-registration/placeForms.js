// // todo gerar o jsonPlaces
// // todo salvar o jsonPlaces no localStorage dentro do jsonOwner correspondente
// todo modularizar para conseguir criar testes unitários
// todo criar validações para os campos

window.onload = () => {
	const owners = JSON.parse(localStorage.getItem("owner"));
	const lastOwner = owners[owners.length - 1];

	const submitBtn = document.getElementById("submit-place-btn");

	submitBtn.onclick = () => {
		const jsonPlace = {
			placeName: "teste",
		};

		lastOwner["place"] = jsonPlace;
		owners[owners.length - 1] = lastOwner;
		localStorage.setItem("owners", JSON.stringify(owners));
	};
};
