# O que foi desenvolvido:
<details>
<summary>Sprint 3</summary>
- Ligação do formulários HTML do estabelecimento localizado no modal da paginal painelestabelecimento.html:
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
      email: estacaosavassi@gmail.com
      password: estacao123
      placeName: Estação Savassi
      cnpj: 123456789000130
      phone: 31999999999
      address: Praça da savassi
      addressComp: 1234
      state: Minas Gerais
      cep: 31000010
      bar: 
      restaurante:
      boate: 
      pizzaria:
      japones: 
      acaisorverte: 
      casadejogos: 
      abreseg: 08:00:00
      fechaseg: 20:00:00
      abreter: 08:00:00
      fechater: 20:00:00
      abrequa: 08:00:00
      fechaqua: 20:00:00
      abrequi: 08:00:00
      fechaqui: 20:00:00
      abresex: 08:00:00
      fechasex: 20:00:00
      abresab: 08:00:00
      fechasab: 20:00:00
      abredom: 08:00:00
      fechadom: 20:00:00
      imgestab: 
    }
  },
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
Para acessar o localStorage é só ir nas DevTools -> Aplicativos -> Armazenamento Local -> Abaixo vai aparecer uma setinha com o nome do dono e dentro dela vai constar o place onde os dados do estabelecimento estarão registrados
</details>

<details>
<summary>Sprint 3</summary>
</details>