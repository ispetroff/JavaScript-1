// Корзина из 5 задания

var products = [{
    name: 'Название',
    price: 'Цена',
    count: 'Колличество',
    total: 'Всего'
},
    {
        name: 'Товар1',
        price: '100',
        count: '1'
    },
    {
        name: 'Товар2',
        price: '200',
        count: '2'
    },
    {
        name: 'Товар3',
        price: '300',
        count: '3'
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


//каталог из 5 задания

var products = [{
    name: 'Название',
    price: 'Цена',
    count: 'Колличество',
    size: 'Размер',
    сolor: 'Цвет'
},
    {
        name: 'Товар1',
        price: '100',
        quantity: '1',
        parameters: {
            size: 'L',
            color: 'Зел',
        }
    },
    {
        name: 'Товар2',
        price: '200',
        quantity: '2',
        parameters: {
            size: 'L',
            color: 'белые',
        }
    },
    {
        name: 'Товар3',
        price: '300',
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

//Заготовка как на лекции для каталога и корзины

// вариант 1
function buildCart(items) {
    var $cart = document.getElementById('cart');

    if (items && items.length) {
        // не пуста
        for (var i = 0; i < items.length; i++) {
            var $div = document.createElement('div');
            $div.classList.add('items');
            var $ul = document.createElement('ul');
            for (prop in cart[i]) {
                var $li = document.createElement('li');
                $li.textContent = prop + ':'
                cart[i][prop];
                $ul.appendChild($li);
            }
            $div.appendChild($ul);
            $items.appendChild($div);
        }
    } else {
        // пуста
        $cart.innerHTML = '';
        var $div = document.createElement('div');
        $div.classList.add('empty');
        $div.textContent = 'Корзина пуста!';
        $cart.appendChild($div);
    }
}
// вариант 2
function buildCart(items) {
    var $cart = document.getElementById('cart');
    var $template = document.getElementById('template').children[0];

    if (items && items.length) {
        // не пуста
        var $user = $template
        for (var i = 0; i < items.length; i++) {
            var $user = $template.cloneNode(true);
            for (prop in cart[i]) {
                $user.querySelector('.' + prop).textContent = prop + ':' cart[i][prop];

            }
            $list.appendChild($user);
        }
    } else {
        // пуста
        $cart.innerHTML = '';
        var $div = document.createElement('div');
        $div.classList.add('empty');
        $div.textContent = 'Корзина пуста!';
        $cart.appendChild($div);
    }
}