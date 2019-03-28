var content2 = document.getElementById("div-2");
content2.innerHTML = "Совершенно новая информация";

getElementsByClassName

Window.onload = my_initiation; // функция проверки загрузки

var div = document.createElement("div");
div.className = "my_div";
div.innerHTML = "<h1>Заголовок</h1><p>Содержимое</p>;


list.appendChild(newLi);

list.insertBefore(newLi, list.children[1]);

parentElem.removeChild(elem)

parentElem.replaceChild(newElem, elem)

11111


var lettersName = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];


var $body = document.body;
var $chessBoard = document.createElement('div');
$chessBoard.classList.add('chessBoard');
$body.appendChild($chessBoard);

/* top letters */
var $latters = document.createElement('div');
$latters.classList.add('latters');
$chessBoard.appendChild($latters);

for (var i = 0; i < lettersName.length; i++) {
    var $latter = document.createElement('div');
    $latter.classList.add('latter', 'latter_top');
    $latters.appendChild($latter).textContent = lettersName[i];
}

/* wrapper board */
var $wrapper = document.createElement('div');
$wrapper.classList.add('wrapper');
$chessBoard.appendChild($wrapper);

/* numbers left */
var $numberWrapper = document.createElement('div');
$numberWrapper.classList.add('number-wrapper');
$wrapper.appendChild($numberWrapper);

for (var i = 1; i <= 8; i++) {
    var $number = document.createElement('div');
    $number.classList.add('number');
    $numberWrapper.appendChild($number).textContent = [i];
}

/* Chess Field */
var $chessField = document.createElement('div');
$chessField.classList.add('chessField');
$wrapper.appendChild($chessField);

for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        if ((i % 2 == 0 && j % 2 == 0) || i % 2 == 1 && j % 2 == 1) {
            var $white = document.createElement('div');
            $white.classList.add('white');
            $chessField.appendChild($white);
        } else {
            var $black = document.createElement('div');
            $black.classList.add('black');
            $chessField.appendChild($black);
        }
    }
}

/* numbers right */
var $numberWrapper = document.createElement('div');
$numberWrapper.classList.add('number-wrapper', 'number-wrapper_rotate');
$wrapper.appendChild($numberWrapper);

for (var i = 1; i <= 8; i++) {
    var $number = document.createElement('div');
    $number.classList.add('number');
    $numberWrapper.appendChild($number).textContent = [i];
}

/* bottom letters */
var $latters = document.createElement('div');
$latters.classList.add('latters');
$chessBoard.appendChild($latters);

for (var i = 0; i < lettersName.length; i++) {
    var $latter = document.createElement('div');
    $latter.classList.add('latter');
    $latters.appendChild($latter).textContent = lettersName[i];
}

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

for (var i = 0; i < 1; i++){
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

for (var i = 1; i < products.length; i++){

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