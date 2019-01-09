//1 Напишем первую игру — «Угадай число». Браузер будет загадывать случайное четырехзначное число, а мы будем
// отгадывать.
//     Попытки отгадать число будут идти через диалоговое окно — prompt. Браузер будет сообщать в ответ,
//     больше или меньше загаданного наш ответ.
//     Алгоритм будет таким:
//     Браузер генерирует число и приглашает пользователя к игре.
//     Выводится окно запроса предположения.
//     Браузер проверяет число и возвращает результат.
//     Повторяем до тех пор, пока число не будет угадано.
//     Как только число угадано, браузер сбрасывает число попыток и генерирует новое число.
//     Пока не будем ничего выводить на страницу. И пока наш алгоритм далек от совершенства.
//     Как только изучим новые возможности языка — сразу улучшим его.

var RandomFractional = Math.random() * 1000; // Генерируем число от 0 до 1000

RandomInteger = Math.round(RandomFractional); // Округляем сгенерированное число вверх

var i = 1;
var n = 3; // количество попыток

while (i <= 2 && RandomInteger != AnswerUser) {
    i = i + 1;
    n = n - i;
    var AnswerUser = +prompt("Угадай число от 0 до 1000. Попытка:" + n);
    if (AnswerUser > RandomInteger) {
        alert("Бери меньше! Осталось попыток:" + n);

    }
    else if (AnswerUser < RandomInteger) {
        alert("Бери больше! Осталось попыток:" + n);

    }
    else {

        alert("Угадали!");
        break;
    }
}
alert("Вы проиграли!");


//2 Почему код дает именно такие результаты?
var a = 1, b = 1, c, d;
c = ++a;
alert(c);           // a = 2 с = 2 префиксная форма увеличила a, равное 1 на 1
d = b++;
alert(d);           // d = 1 b = 2 постфиксная форма увеличила b, равное 1 на 1, но вернуло прежнее значение b
c = (2 + ++a);
alert(c);      // a = 3 c = 5 префиксная форма увеличила a, равное 2, на единицу и к нему прибавили 2
d = (2 + b++);
alert(d);      // b = 2 d = 4 постфиксная форма увеличила b, равное 2 на 1, но вернуло прежнее значение b равное 2
alert(a);                    // 3 в итоге a и b получились равны 3
alert(b);                    // 3

//3 Чему будет равен x?

var a = 2;
var x = 1 + (a *= 2); //undefined


//4
// Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
//     если a и b положительные, вывести их разность;
//     если а и b отрицательные, вывести их произведение;
//     если а и b разных знаков, вывести их сумму;
//     Ноль можно считать положительным числом.

var a;
var b;

a = +prompt("Введи a:");
b = +prompt("Введи b:");

if (a >= 0 && b >= 0)
    alert(a - b);
else if (a <= 0 && b <= 0)
    alert(a * b);
else
    alert(a + b);

//Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.


a = prompt("Введи a (от 1 до 15):");

switch (a) {
    case "1":
        alert("1");
    case "2":
        alert("2");
    case "3":
        alert("3");
    case "4":
        alert("4");
    case "5":
        alert("5");
    case "6":
        alert("6");
    case "7":
        alert("7");
    case "8":
        alert("8");
    case "9":
        alert("9");
    case "10":
        alert("10");
    case "11":
        alert("11");
    case "12":
        alert("12");
    case "13":
        alert("13");
    case "14":
        alert("14");
    case "15":
        alert("15");
}

//Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.

x = +prompt("Введи x:");
y = +prompt("Введи y:");

z = summ5(x, y);
alert("x + y = " + z);

z = minus5(x, y);
alert("x - y = " + z);

z = multipl5(x, y);
alert("x * y = " + z);

z = divign5(x, y);
alert("x / y = " + z);


function summ5(x, y) {
    return (x + y);
}

function minus5(x, y) {
    return (x - y);
}

function multipl5(x, y) {
    return (x * y);
}

function divign5(x, y) {
    return (x / y);
}

//    Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
//    где arg1, arg2 — значения аргументов, operation — строка с названием операции.
//    В зависимости от переданного значения выполнить одну из арифметических операций
//    (использовать функции из пункта 3) и вернуть полученное значение (применить switch).

var w;

arg1 = +prompt("Введи arg1:");
arg2 = +prompt("Введи arg2:");
operation = prompt("Введи operation (mi, mu, sum):");
w = mathOperation(arg1, arg2, operation);
alert(w);

function mathOperation(arg1, arg2, operation) {
    var q;
    switch (operation) {
        case "mi":
            q = arg1 - arg2;
            return (q);
        case "mu":
            q = arg1 * arg2;
            return (q);
        case "sum":
            q = arg1 + arg2;
            return (q);
    }

}

//Сравнить null и 0. Объяснить результат.  DTHYB
alert(null > 0); // false
alert(null == 0); // false
alert(null >= 0); // true
alert(null <= 0); // true

// С помощью рекурсии организовать функцию возведения числа в степень.
// Формат: function power(val, pow), где val — заданное число, pow –— степень.


function power(val, pow) {
    if (pow != 1) { // пока pow!=1 сводить вычисление power(..power) к power(..pow-1)
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

alert(power(1,2));