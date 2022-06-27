// // todo gerar o jsonPlaces
// // todo salvar o jsonPlaces no localStorage dentro do jsonOwner correspondente
// todo modularizar para conseguir criar testes unitários
// todo criar validações para os campos

window.onload = () => {
  const owners = JSON.parse(localStorage.getItem('owners'));
  const lastOwner = owners[owners.length - 1];

  const submitPlaceBtn = document.getElementById('submit-place-btn');
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');
  const nameInput = document.getElementById('place-name-input');
  const cnpjInput = document.getElementById('cnpj-input');
  const phoneInput = document.getElementById('phone-input');
  const addressInput = document.getElementById('address-input');
  const addressCompInput = document.getElementById('address-comp-input');
  const stateInput = document.getElementById('state-input');
  const cepInput = document.getElementById('cep-input');

 /*
  const barInput = document.getElementById('bar-input');
  const restauranteInput = document.getElementById('restaurante-input');
  const boateInput = document.getElementById('boate-input');
  const pizzariaInput = document.getElementById('pizzaria-input');
  const japonesInput = document.getElementById('japones-input');
  const acaiSorveteInput = document.getElementById('acai-sorvete-input');
  const casaDeJogosInput = document.getElementById('casa-de-jogos-input');
 */
  const abreSegInput = document.getElementById('abre-seg-input');
  const fechaSegInput = document.getElementById('fecha-seg-input');
  const abreTerInput = document.getElementById('abre-ter-input');
  const fechaTerInput = document.getElementById('fecha-ter-input');
  const abreQuaInput = document.getElementById('abre-qua-input');
  const fechaQuaInput = document.getElementById('fecha-qua-input');
  const abreQuiInput = document.getElementById('abre-qui-input');
  const fechaQuiInput = document.getElementById('fecha-qui-input');
  const abreSexInput = document.getElementById('abre-sex-input');
  const fechaSexInput = document.getElementById('fecha-sex-input');
  const abreSabInput = document.getElementById('abre-sab-input');
  const fechaSabInput = document.getElementById('fecha-sab-input');
  const abreDomInput = document.getElementById('abre-dom-input');
  const fechaDomInput = document.getElementById('fecha-dom-input');
  const imgEstabelecimentoInput = document.getElementById('imgestab-input');

  submitPlaceBtn.onclick = () => {
    const jsonPlace = {
      email: emailInput.value,
      password: passwordInput.value,
      placeName: nameInput.value,
      cnpj: cnpjInput.value,
      phone: phoneInput.value,
      address: addressInput.value,
      addressComp: addressCompInput.value,
      state: stateInput.value,
      cep: cepInput.value,
      abreseg: abreSegInput.value,
      fechaseg: fechaSegInput.value,
      abreter: abreTerInput.value,
      fechater: fechaTerInput.value,
      abrequa:  abreQuaInput.value,
      fechaqua:  fechaQuaInput.value,
      abrequi: abreQuiInput.value,
      fechaqui: fechaQuiInput.value,
      abresex: abreSexInput.value,
      fechasex: fechaSexInput.value,
      abresab: abreSabInput.value,
      fechasab: fechaSabInput.value,
      abredom: abreDomInput.value,
      fechadom: fechaDomInput.value,
      imgestab: imgEstabelecimentoInput.value,
    };

    lastOwner['place'] = jsonPlace;
    owners[owners.length - 1] = lastOwner;
    localStorage.setItem('owners', JSON.stringify(owners));
  };
}


/*
bar: barInput.checked,
restaurante: restauranteInput.checked,
boate: boateInput.value,
pizzaria: pizzariaInput.value,
japones: japonesInput.value,
acaisorverte: acaiSorveteInput.value,
casadejogos: casaDeJogosInput.value,*/