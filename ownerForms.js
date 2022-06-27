// // todo gerar o jsonOwner
// // todo salvar no localStorage o jsonOwner
// todo modularizar para conseguir criar testes unitários
// todo criar validações para os campos

export function getRadioValue(radiosInput) {
  const checkedRadio = radiosInput.find((radio) => radio.checked);

  if (checkedRadio === undefined) {
    return '';
  }
  return checkedRadio.value;
}

window.onload = () => {
  let owners = localStorage.getItem('owners');
  owners = owners ? JSON.parse(owners) : [];

  const nameInput = document.getElementById('name-input');
  const emailInput = document.getElementById('email-input');
  const cpfInput = document.getElementById('cpf-input');
  const passwordInput = document.getElementById('password-input');
  const submitBtn = document.getElementById('submit-btn');

  submitBtn.onclick = () => {
    const radiosInput = Array.from(document.getElementsByName('gender'));
    console.log(radiosInput);

    const jsonOwner = {
      name: nameInput.value,
      email: emailInput.value,
      cpf: cpfInput.value,
      password: passwordInput.value,
      gender: getRadioValue(radiosInput),
    };
    owners.push(jsonOwner);

    localStorage.setItem('owners', JSON.stringify(owners));

    window.location.replace('./painelestabelecimento.html');
  };
};
