# O que foi desenvolvido:
- Dois formulários HTML:
  - 1. Cadastro de usuário (dono);
  - 2. Cadastro de informações (estabelecimentos);
- Lógica em JavaScript para salvar os dados no localStorage;
- Mocks dos dados para futuros testes.

### Estrutura JSON final (salva no localStorage)
Os dados foram salvos no localStorage com a key "owners" como um array de objetos. De forma que cada objeto representa um dono de estabelecimento.
```
[
  {
    cpf: "11111111111",
    email: "primeiro@usuario.com",
    gender: "masculino",
    name: "Primeiro Usuario",
    password: "minhasenha",
    place: {
      address: "R. do Forró",
      cnpj: "11111111111",
      phone: "22222222222",
      placeName: "Forrozeira"
    }
  },
  {
    cpf: "22222222222",
    email: "segundo@usuario.com",
    gender: "feminino",
    name: "Segundo Usuario",
    password: "outrasenha",
    place: {
      address: "R. do Baião",
      cnpj: "1233214154231",
      phone: "22222222222",
      placeName: "Baiãozada"
    }
  }
]
```

### Plano de testes
| # | Cenário                  | Pré-condições  | Ações                                                                                                              | Resultados esperados                                                                                 |
|---|--------------------------|----------------|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| 1 | Cadastro de donos OK     | Site funcional | 1. Acessar o cadastro de donos  2. Preencher todos os campos  3. Clicar em salvar dados  4. Aguardar resultado     | O sistema deverá redirecionar o usuário para a página de cadastro do estabelecimento (um novo forms) |
| 2 | Cadastro de donos não OK | Site funcional | 1. Acessar o cadastro de donos  2. Não preencher todos os campos  3. Clicar em salvar dados  4. Aguardar resultado | O sistema deverá alertar o usuário de que todos os campos devem ser preenchidos corretamente         |
| 3 | Dados dos donos salvos   | Site funcional | 1. Acessar o cadastro de donos  2. Preencher todos os campos  3. Clicar em salvar dados  4. Aguardar resultado     | O sistema deverá salvar os dados preenchidos no localStorage como um elemento de um array de objetos |
| 4 | Dados dos estabelecimentos salvos | Site funcional | 1. Acessar o cadastro de estabelecimentos  2. Preencher todos os campos  3. Clicar em salvar dados  4. Aguardar resultado | O sistema deverá salvar os dados preenchidos no localStorage dentro do objeto correspondente ao dono |