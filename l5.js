22222222


var products = [{
    name: 'Название',
    price: 'Цена',
    count: 'Колличество',
    total: 'Всего'
},
    {
        name: 'Носки',
        price: '100',
        count: '1'
    },
    {
        name: 'Трусы',
        price: '300',
        count: '1'
    },
    {
        name: 'Шорты',
        price: '800',
        count: '1'
    }
];

function countBasketPrice(products) {
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        if (i > 0) {
            sum = sum + products[i].price * products[i].count;
        }

    }
    return sum;
}

var $body = document.body;
var $products = document.createElement('div');
$products.classList.add('products');
$body.appendChild($products);

for (var i = 0; i < 1; i++) {
    var $product = document.createElement('div');
    $product.classList.add('product');
    $products.appendChild($product);

    var $name = document.createElement('div');
    $name.classList.add('name');
    $product.appendChild($name).textContent = products[i].name;

    var $price = document.createElement('div');
    $price.classList.add('price');
    $product.appendChild($price).textContent = products[i].price;

    var $count = document.createElement('div');
    $count.classList.add('count');
    $product.appendChild($count).textContent = products[i].count;

    var $total = document.createElement('div');
    $total.classList.add('total');
    $product.appendChild($total).textContent = products[i].total;

}

for (var i = 1; i < products.length; i++) {

    var $product = document.createElement('div');
    $product.classList.add('product');
    $products.appendChild($product);

    var $name = document.createElement('div');
    $name.classList.add('name');
    $product.appendChild($name).textContent = products[i].name;

    var $price = document.createElement('div');
    $price.classList.add('price');
    $product.appendChild($price).textContent = products[i].price;

    var $count = document.createElement('div');
    $count.classList.add('count');
    $product.appendChild($count).textContent = products[i].count;

    var $total = document.createElement('div');
    $total.classList.add('total');
    $product.appendChild($total).textContent = products[i].price * products[i].count;
}


var $alltotal = document.createElement('div');
$alltotal.classList.add('alltotal');
$alltotal.textContent = 'Итого: ' + countBasketPrice(products);
$products.appendChild($alltotal);


3333333

var products = [{
    name: 'Название',
    price: 'Цена',
    count: 'Колличество',
    size: 'Размер',
    сolor: 'Цвет'
},
    {
        name: 'Футболка',
        price: '800',
        quantity: '3',
        parameters: {
            size: 'L',
            color: 'Зелённый',
        }
    },
    {
        name: 'Носки',
        price: '800',
        quantity: '3',
        parameters: {
            size: 'L',
            color: 'белые',
        }
    },
    {
        name: 'Трусы',
        price: '800',
        quantity: '3',
        parameters: {
            size: 'L',
            color: 'Белые',
        }
    },
];


var $body = document.body;

for (var i = 0; i < products.length; i++) {
    var $catalog = document.createElement('div');
    $catalog.classList.add('catalog');
    $catalog.textContent = products[i].name;
    $body.appendChild($catalog);
}

44444444