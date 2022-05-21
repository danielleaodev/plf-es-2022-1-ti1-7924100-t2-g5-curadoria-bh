$(document).ready(function(e){

    jsonObject.products.forEach((i)=>loadProducts(i));

});


function loadProducts(data){

    var li = document.createElement('li');

    li.innerHTML = 
    '<div class="card mt-1">'+
    '<div class="product-1 align-items-right p-2 text-right"> <img src="'+data.image+'" class="rounded" width="150" height="100">'+
    '<h6 class="mt-2 font-weight-bold mb-2 info">'+data.title+'</h6>'+
    '<div class="mt-3 info"> <span class="text1 d-block">'+ data.description+' </span> </div>'+
    '</div>'+
    '</div>'+
    '<div class="button-color p-2 text-right text-black"> <span class="text-uppercase ">Editar</span> </div>'+
    '<div class="button-color p-2 text-right text-black"> <span class="text-uppercase ">Excluir</span> </div>'+
    '</div>';

document.getElementById("home_product").appendChild(li);

}


li.innerHTML = '<div class="card mt-1">'+
'<div class="product-1 align-items-right p-2 text-right"> <img src="'+data.image+'" class="rounded" width="150" height="100">'+
    '<h6 class="mt-2 font-weight-bold mb-2 info">'+data.title+'</h6>'+
    '<div class="mt-3 info"> <span class="text1 d-block">'+ data.description+' </span> </div>'+
    '</div>'+
'</div>'+
'<div class="button-color p-2 text-right text-black"> <span class="text-uppercase ">Editar</span> </div>'+
'<div class="button-color p-2 text-right text-black"> <span class="text-uppercase ">Excluir</span> </div>'+
'</div>';