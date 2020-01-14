var getCartValue = [];
getCartValue = JSON.parse(localStorage.getItem('cart'));

var table = document.getElementById('tablecart');
var properties = ['id', 'name', 'quantily', 'price', 'subtotal', 'btndel'];

function displayTable() {
  for (var i = 0; i < getCartValue.length; i++) {
    var product  = getCartValue[i];
    var tr       = document.createElement('tr');
    var id       = document.createElement('td');
    var name     = document.createElement('td');
    var quantily = document.createElement('td');
    var price    = document.createElement('td');
    var subtotal = document.createElement('td');
    var btnadd   = document.createElement('div');

    id.innerHTML       = product[properties[0]];
    name.innerHTML     = product[properties[1]];
    quantily.innerHTML = ('<input type="text" value="1">');
    price.innerHTML    = product[properties[3]];
    subtotal.innerHTML = ('<p>' + product[properties[3]] + '</p>');
    btnadd.innerHTML   = ('<button id="' + product[properties[0]] + '" onclick="deleteCart(' + product[properties[0]] + ')">X</button>');

    tr.appendChild(id);
    tr.appendChild(name);
    tr.appendChild(quantily);
    tr.appendChild(price);
    tr.appendChild(subtotal);
    tr.appendChild(btnadd);
    table.appendChild(tr);
  }
}
displayTable();

function deleteCart(id) {
  localStorage.removeItem(id);
}
