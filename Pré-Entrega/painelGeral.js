// console.log(jsonObject.products.find((obj) => obj.title ===  "Show: 'Hard and Heavy'"));

var jsonObject  = {
  "products": [
    {
      "title": "10% OFF",
      "description": "10% de desconto em todos os produtos! Válido entre 30/05/2022 a 06/06/2022",
      "image":"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

    },
    {
      "title": "Show: 'Hard and Heavy'",
      "description": "Show da banda Hard and Heavy | Dia 08/06/2022",
      "image":"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",

    },
    {
      "title": "Chopp 300ml gratuito",
      "description": "Chopp 300ml gratuito para primeira visita como assinante do Beagapp",
      "image":"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      "title": "Chopp 300ml gratuito",
      "description": "Chopp 300ml gratuito para primeira visita como assinante do Beagapp",
      "image":"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      "title": "Show: 'Hard and Heavy'",
      "description": "Show da banda Hard and Heavy | Dia 08/06/2022",
      "image":"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    }
  ]
}

localStorage.setItem('db', JSON.stringify(jsonObject));

$(document).ready(function () {
  jsonObject.products.forEach((i) => loadProducts(i));
});


function loadProducts(data) {

  var div = document.getElementById('home_product');

  div.innerHTML +=
  '<div class="col-12 col-sm-12 col-md-6 col-xl-3 col-xxl-3 cardpromo">' + 
    '<div class="card">' +
        '<img class="card-img-top" src="' + data.image + '" alt="Card image cap">' +
        '<div class="card-body">' +
            '<h5 class="card-title">' + data.title +'</h5>' +
            '<p class="card-text"><b>Validade:</b> 31/12/2022</p>' + 
            '<p class="card-text">'+ data.description +'</p>' +
        '</div>' +
        '<div class="btn-group" role="group">' +
            '<button class="btn btn-danger w-100" type="button" onclick="deleteProduct(this)"><b>Excluir</b></button>' +
        '</div>' +
    '</div>' +
  '</div>'

}


function deleteProduct(item) {
var itemIndex = item.closest('.cardpromo');
itemIndex.remove();
}


