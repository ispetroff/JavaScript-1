//1 Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
// десятки и сотни.
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть
// пустой объект.


var arrez;
var num = +prompt('Введи число:');

arrez = razriad(num);

function razriad(num) {
    if (num > 999) {
        console.log('Число должно быть меньше 999');
    } else {
        u = num % 10;
        d = parseInt(num / 10 % 10);
        h = parseInt(num / 100);
        arrez.hundred = h;
        arrez.units = u;
        arrez.desimal = d;
        return (arrez);
    }

}


//2 Продолжить работу с интернет-магазином:
//В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//Реализуйте такие объекты.
//Перенести функционал подсчета корзины на объектно-ориентированную базу.

var backet = [
    {productName: "Рубашки", productCost: 100, productQuontity: 1},
    {productName: "Носки", productCost: 30, productQuontity: 3},
];

ts = countBacketPrice(backet);
// по частям работает, а все вместе не работает в консоли видимо не правильно отдаю объект в функцию,
// но гугле так ничего и не нашел про это
console.log(ts);

function countBacketPrice(backet) {
    var summBacket = 0;
    for (var i = 1; i <= backet.length; i = i++) {
        summBacket = summBacket + backet[i].productCost * backet[i].productQuontity;
    }
    return (summBacket);
}



//3* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
// Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать
// разные методы.

//Пока не понял о чем речь вообще((((((

//Переделки прошлого ДЗ к Lesson-3

//3/3

var products = [
['Носки', 100,2],
['Трусы', 100,2]
]

function countBacketPrice (products) {
    var sum = 0;
    for (var i = 0; i < products.length; i++ ) {
    sum = sum + products[i][1]*products[i][2];
    }
return sum;
}

console.log(countBacketPrice (products)); 

//3/4

for (var i = 0; i < 10; console.log(i++)) {}

//3/5

var str = '';

for (var i = 0; i < 20; i++) {
str = str + 'x';
console.log(str);
}

//Вариант 2

for ( var i = 1; i < 10; i++){
    console.log('x'.repeat(i));
}


//3/6


var i = 1;
while (i <= 100) {
    if(isPrime(i)) {
    console.log(i);
    }
i++
}
function isPrime(num) {
    If( num <= 1){
        return false;
    }
    var i=2;
    while( i < num) {
        if (num % i === 0) {
        return false;
        }
    i++
    }
return true;
}
