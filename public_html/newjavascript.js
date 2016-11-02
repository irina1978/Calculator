while (true) {
    var number = prompt('Введите число', "");
    if (number !== '' && !isNaN(number)) {
        alert('Вы ввели число ' +number);
        number = +number;
        break;
    }
    alert('Вы ввели не число!');
}

while (true) {
    var number1=prompt('Введите второе число',"");
    if (number1 !== '' && !isNaN(number1)) {
        alert('Вы ввели число ' +number1);
        number1 = +number1;
        break;
    }
    alert('Вы ввели не число!');
}

while (true) {
    var symbol=prompt('Введите один из математических символов + - * /',"");
    if (symbol === '*' || symbol === '/' || symbol === '+' || symbol === '-') {
        if (symbol !== '/' || number1 !== 0) {
            alert('Вы ввели символ ' +symbol);
            break;
        } else {
            alert('Нельзя применять деление на ноль');
        }
    }
    alert('Можно вводить только + - * /');
}

var result = 0;

switch (symbol) {
    case '+':
        result = number + number1;
        break;
    case '-':
        result = number - number1;
        break;
    case '*':
        result = number * number1;
        break;
    case '/':
        result = number / number1;
        break;
    default:
        break;
}

alert (number + ' ' + symbol + ' ' + number1 + ' = ' + result);