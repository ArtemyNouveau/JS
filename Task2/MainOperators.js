window.onload = function () {
    print('1)\n' +
        "var a = 1, b = 1, c, d;  // a = 1, b = 1, c = null, d = null\n" +
        "c = ++a; alert(c);       // a = 2, c = a(2); b = 1, d = null\n" +
        "d = b++; alert(d);       // d = b = 1, b = 2; a = 2, c = 2\n" +
        "c = (2 + ++a); alert(c); // a = 3, c = 2 + a(3) = 5; b = 2, d = 1\n" +
        "d = (2 + b++); alert(d); // d = 2 + b(2) = 4, b = 3; a = 3, c = 5\n" +
        "alert(a); alert(b);      // a = 3, b = 3, c = 5, d = 4\n" +
        "++i;                     // унарная операция инкремента, возвращающая измененное значение\n" +
        "i++;                     // унарная операция инкремента, возвращающая значение до изменения");
    print('2)\n' +
        "var a = 2;            // a = 2;\n" +
        "var x = 1 + (a *= 2); // a умножаем с присваиванием на 2 и прибавляем к a 1 (1 + a(2)*2)\n");
    print("3)\n" + thirdExercise());
    print("4)\n" + fourthExercise());

    print("5)6)8)\n" + countExpression(prompt("input expression you want to count, according to form\n(separate operator by spaces)", "a ^ b")));

    print("7)\n" +
        "null != 0. \n" +
        "Отсутсвие данных (ссылка в никуда) не равно числу, тем более нулю.\n" +
        "Это в хитрой JS арифметике можно производить функции с null, потому что интерпретатор переводит его к 0 или '' для арифметических функций, чтобы не давать ошибки.\n" +
        "В проверке на null менять его на 0 было бы небезопасно.");
};

function thirdExercise() {
    let a = + randomInteger(-5, 5),
        b = + randomInteger(-5, 5);
    if (a >= 0 && b >= 0){
        return ["a=" + a, "b=" + b, "a-b=" + (a-b)].join(', ');
    }
    if (a < 0 && b < 0) {
        return ["a=" + a, "b=" + b, "a*b=" + (a*b)].join(', ');
    }
    return ["a=" + a, "b=" + b, "a+b=" + (a+b)].join(', ');
}

function fourthExercise() {
    let a = + randomInteger(0, 15),
        resultStr = 'a = ' + a + '\n';
    switch (a) {
        case 1:  resultStr += 1  + ' ';
        case 2:  resultStr += 2  + ' ';
        case 3:  resultStr += 3  + ' ';
        case 4:  resultStr += 4  + ' ';
        case 5:  resultStr += 5  + ' ';
        case 6:  resultStr += 6  + ' ';
        case 7:  resultStr += 7  + ' ';
        case 8:  resultStr += 8  + ' ';
        case 9:  resultStr += 9  + ' ';
        case 10: resultStr += 10 + ' ';
        case 11: resultStr += 11 + ' ';
        case 12: resultStr += 12 + ' ';
        case 13: resultStr += 13 + ' ';
        case 14: resultStr += 14 + ' ';
        case 15: resultStr += 15 + ' ';
        return resultStr;
    }
}

function countExpression(str) {
    let arr = str.split(' ');
    return count(arr[0], arr[2], arr[1])
}

function count(a, b, operation) {
    let sum = function (a, b) {
        if (isNaN(a) || isNaN(b)) return "your numbers are invalid";
        return Number(a) + Number(b);
    };

    let substract = function (a, b) {
        if (isNaN(a) || isNaN(b)) return "your numbers are invalid";
        return Number(a) - Number(b);
    };

    let multiply = function (a, b) {
        if (isNaN(a) || isNaN(b)) return "your numbers are invalid";
        return Number(a) * Number(b);
    };

    let divide = function (a, b) {
        if (isNaN(a) || isNaN(b)) return "your numbers are invalid";
        if (isNaN(Number(a) / Number(b))) return "0/0 = is not determined";
        return Number(a) / Number(b);
    };

    let power = function (val, pow) {
        if (isNaN(val) || isNaN(pow)) return "your numbers are invalid";
        if (pow <= 1) return val;
        return val*power(val, pow-1);
    };

    switch (operation) {
        case '+': return sum(a, b);
        case '-': return substract(a, b);
        case '*': return multiply(a, b);
        case '/':
        case ':': return divide(a, b);
        case '^': return power(a, b);
        default: return "I can't count this function: " + operation;
    }
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function print(massage) {
    console.log(massage)
}