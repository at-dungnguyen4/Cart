var products = [
  {
    id: '1',
    name: 'SP1',
    describe: 'Mota1',
    img: 'images/1.png',
    price: '&dollar;100000',
  },
  {
    id: '2',
    name: 'SP2',
    describe: 'Mota2',
    img: 'images/2.png',
    price: '&dollar;200000',
  },
  {
    id: '3',
    name: 'SP3',
    describe: 'Mota3',
    img: 'images/3.png',
    price: '&dollar;300000',
  },
  {
    id: '4',
    name: 'SP4',
    describe: 'Mota4',
    img: 'images/4.png',
    price: '&dollar;400000',
  },
  {
    id: '5',
    name: 'SP5',
    describe: 'Mota5',
    img: 'images/5.png',
    price: '&dollar;500000',
  },
  {
    id: '6',
    name: 'SP6',
    describe: 'Mota6',
    img: 'images/6.png',
    price: '&dollar;600000',
  },
  {
    id: '7',
    name: 'SP7',
    describe: 'Mota7',
    img: 'images/7.png',
    price: '&dollar;700000',
  },
  {
    id: '8',
    name: 'SP8',
    describe: 'Mota8',
    img: 'images/8.png',
    price: '&dollar;800000',
  }
];
//localStorage.clear();
localStorage.setItem("product", JSON.stringify(products));
var item = [];
item = JSON.parse(localStorage.getItem('product'));
var ul = document.getElementById('listproduct');
var properties = ['id', 'img', 'name', 'describe', 'price'];

function displayTable() {
  for (var i = 0; i < item.length; i++) {
    var product  = item[i];
    var li       = document.createElement('li');
    var image    = document.createElement('div');
    var name     = document.createElement('p');
    var describe = document.createElement('p');
    var price    = document.createElement('p');
    var btnadd   = document.createElement('div');
    image.innerHTML    = ('<img src=" ' + product[properties[1]] + ' ">');
    name.innerHTML     = product[properties[2]];
    describe.innerHTML = product[properties[3]];
    price.innerHTML    = product[properties[4]];
    btnadd.innerHTML   = ('<button id="' + product[properties[0]] + '" onclick="addCart(' + product[properties[0]] + ')" class="btn-primary">Add to Cart</button>');

    li.appendChild(image);
    li.appendChild(name);
    li.appendChild(describe);
    li.appendChild(price);
    li.appendChild(btnadd);
    ul.appendChild(li);
  }
}
displayTable();

var count = 0;
var addToCart = [];
function addCart(id) {
  count += 1;
  document.getElementById('count').innerHTML = count;
  addToCart.push(products[id - 1]);
  localStorage.setItem('cart', JSON.stringify(addToCart));
  var getAddCart = [];
  getAddCart = JSON.parse(localStorage.getItem('cart'));
}

// var btnClick = document.getElementsByClassName('btn-primary');
// for (var i = 0; i < btnClick.length; i++) {
//   var indexBtn = btnClick[i];
//   indexBtn.addEventListener('click', function() {
//     event.target.setAttribute('disabled', 'disabled');
//   });
// }

