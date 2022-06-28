window.onload = () => {
  const db = JSON.parse(localStorage.getItem('owners'));

  const proceedBtn = document.getElementById('proceed-crud-btn');
  const createBtn = document.getElementById('create-crud-btn');
  const modifyBtn = document.getElementById('modify-crud-btn');
  const deleteBtn = document.getElementById('delete-crud-btn');

  modifyBtn.disabled = true;
  deleteBtn.disabled = true;

  proceedBtn.onclick = () => {
    const cpf = document.getElementById('cpf-crud-input').value;
    const isCpfInStorage = db.filter((owner) => owner.cpf === cpf);

    if (isCpfInStorage.length < 1) {
      alert('CPF não cadastrado!');
    } else {
      const owner = db.filter((o) => o.cpf === cpf)[0];
      const name = document.getElementById('name-list');
      name.innerText = owner.name;
      const email = document.getElementById('email-list');
      email.innerText = owner.email;
      const gender = document.getElementById('gender-list');
      gender.innerText = owner.gender;
      const ownerCpf = document.getElementById('cpf-list');
      ownerCpf.innerText = owner.cpf;

      modifyBtn.disabled = false;
      deleteBtn.disabled = false;
    }
  };

  // createBtn.onclick = () => {
  //   generateForms();
  // };

  // modifyBtn.onclick = () => {
  //   generateForms();
  // };

  deleteBtn.onclick = () => {
    const cpf = document.getElementById('cpf-crud-input').value;
    const localStorageDb = JSON.parse(localStorage.getItem('owners'));
    const filteredDb = localStorageDb.filter((owner) => owner.cpf !== cpf);

    localStorageDb.setItem('owners', JSON.stringify(filteredDb));
  };
};

// function generateForms() {} // função para gerar forms para edição e/ou criação de um novo dono + estabelecimento
