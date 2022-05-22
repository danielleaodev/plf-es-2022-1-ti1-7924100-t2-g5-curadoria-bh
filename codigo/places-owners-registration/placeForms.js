// // todo gerar o jsonPlaces
// // todo salvar o jsonPlaces no localStorage dentro do jsonOwner correspondente
// todo modularizar para conseguir criar testes unitários
// todo criar validações para os campos

// estrutura JSON final para cada dono:
// {
// cpf: "14428936722",
// email: "matheus@teste.com",
// gender: "masculino",
// name: "Matheus",
// password: "minhasenha",
// place: {
// 	address: "R. Ó do Forró",
// 	cnpj: "1233214154231",
// 	phone: "3178877783",
// 	placeName: "Forrozeira"
// 	}
// }

window.onload = () => {
  const owners = JSON.parse(localStorage.getItem('owners'));
  const lastOwner = owners[owners.length - 1];

  const submitPlaceBtn = document.getElementById('submit-place-btn');
  const nameInput = document.getElementById('place-name-input');
  const cnpjInput = document.getElementById('cnpj-input');
  const phoneInput = document.getElementById('phone-input');
  const addressInput = document.getElementById('address-input');

  submitPlaceBtn.onclick = () => {
    const jsonPlace = {
      placeName: nameInput.value,
      cnpj: cnpjInput.value,
      phone: phoneInput.value,
      address: addressInput.value,
    };

    lastOwner['place'] = jsonPlace;
    owners[owners.length - 1] = lastOwner;
    localStorage.setItem('owners', JSON.stringify(owners));
  };
};
