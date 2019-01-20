//1 С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var arr = [];
for (num = 0; num < 101; num++) {
    if (num % 2 === 0) {
        continue;
    } else if (num % 3 === 0) {
        continue;
    } else if (num % 4 === 0) {
        continue;
    } else if (num % 5 === 0) {
        continue;
    } else if (num % 6 === 0) {
        continue;
    } else if (num % 7 === 0) {
        continue;
    } else if (num % 8 === 0) {
        continue;
    } else if (num % 9 === 0) {
        continue;
    } else if (num % 10 === 0) {
        continue;
    } else if (num % 11 === 0) {
        continue;
    } else if (num % 12 === 0) {
        continue;
    } else if (num === 1) {
        continue;
    } else {
        arr.push(num);
    }
}

//2 С этого урока начинаем работать с функционалом интернет-магазина.
//Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от
//находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
//Организовать такой массив для хранения товаров в корзине;
//Организовать функцию countBasketPrice, которая будет считать стоимость корзины.



// 3 Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//  for(...){}// здесь пусто}

for (var i = 'x'; i.length <= 20; console.log( i += 'x') {}


// 4 Нарисовать пирамиду с 20 рядами с помощью console.log, как показано на рисунке:
//x
//xx

var str = '';
for (var i = 1; i <= 20; i++) {
    str += 'x';
    document.write(str + '<br>');
}