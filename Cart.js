var getCartValue = [];
getCartValue = JSON.parse(localStorage.getItem('productvalue'));
var cart = JSON.parse(localStorage.getItem('productvalue'));
var table = document.getElementById('tablecart');
var properties = ['id', 'name', 'quantily', 'price', 'count', 'subtotal', 'btndel'];
var sum = 0;

function displayTable() {
  for (var i = 0; i < getCartValue.length; i++) {
    var product = getCartValue[i];
    var tr = document.createElement('tr');
    var id = document.createElement('td');
    var name = document.createElement('td');
    var quantily = document.createElement('td');
    var price = document.createElement('td');
    var subtotal = document.createElement('td');
    var btnadd = document.createElement('td');

    if (parseInt(product[properties[4]]) !== 0) {
      id.innerHTML = product[properties[0]];
      name.innerHTML = product[properties[1]];
      quantily.innerHTML = product[properties[4]];
      price.innerHTML = product[properties[3]];
      subtotal.innerHTML = parseInt(product[properties[3]]) * parseInt(product[properties[4]]);
      btnadd.innerHTML = ('<button data-id="' + product[properties[0]] + '" class="btn-delete" >X</button>');
      sum += parseInt(product[properties[3]]) * parseInt(product[properties[4]]);

      tr.appendChild(id);
      tr.appendChild(name);
      tr.appendChild(quantily);
      tr.appendChild(price);
      tr.appendChild(subtotal);
      tr.appendChild(btnadd);
      table.appendChild(tr);

    }

  }
}

displayTable();
console.log(sum);
deleteCart();
var total_price = '<tr><td colspan = "3"></td> <td> Total </td> <td class = "total-price">' + sum + ' </td><td></td></tr>';
document.getElementById("tablecart").innerHTML += total_price;

function deleteCart() {
  var btnClick = document.getElementsByClassName('btn-delete');
  var count = 1;
  var product = localStorage.getItem('productvalue');
  product = product ? JSON.parse(product) : [];
  for (var i = 0; i < product.length; i++) {
    for (var j = 0; j < btnClick.length; j++) {
      var indexBtn = btnClick[j];
      indexBtn.addEventListener('click', function (event) {
        return product[i].count = 0;
      });
    }
  }
}
