window.onload = function () {
    // 1)
    let tempC = prompt("Enter temperature in celsius", '°C');
    while (tempC == null || Number.isNaN(Number(tempC))) {
        alert('You have enter a Number and press OK.');
        tempC = prompt("Enter temperature", '°C');
    }
    print('temperature in fahrenheit: ' + ((Number(tempC)*9/5)+32) + '°F');

    // 2)
    const VASYA = "Василий";
    let admin = VASYA;
    print('admin: ' + admin);

    // 3)
    print('1000 + \"108\" = ' + (1000+"108") + '\n(Number cast to string)');

    // 4)
    print("Скрипт с атрибутом \'async\' загружаеться парралельно с разбором документа и останавливает парсер HTML документа только после полной загрузки, на время выполнения скрипта.\n" +
        "Скрипт с атрибутом \'defer\' загружаеться так же как и предыдущий скрипт, только выполняются скрипты с данным атрибутом после отображения HTML документа (скрипты сохраняют порядок выполнения).")
};

function print(string) {
    console.log(string);
}
