/*Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту.
 Подсказка: расчет идет по формуле Tf = (9 / 5) * Tc + 32, где Tf — температура по Фаренгейту, Tc — по Цельсию.*/

var tc;
var tf;

tc = +prompt('Введите температуру в градусах по Цельсию:');

tf = (9 / 5) * tc + 32;

alert(tf);


/*Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin.
    Вывести admin (должно вывестись «Василий»).*/

var admin;
var name;

name = 'Василий';
admin = name;

alert(admin);

/*Чему будет равно JS-выражение 1000 + "108" */

var test = 1000 + '100';

alert(test);
