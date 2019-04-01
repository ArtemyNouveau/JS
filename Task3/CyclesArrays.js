Ex1.onclick = function (){
    print("1)\n" + primeNumbers(1, 100));
};

Ex2.onclick = function () {
    let basket = initBasket(prompt("Input the amount of goods in the basket"), 0);
    print("2)\nProducts: \n" + getGoods(basket) + "Total price: " + countBasketPrice(basket));
};

Ex3.onclick = function () {
    print("3)\n" + thirdExercise(0, 9) + "\n\n" +
    "let answer = \"\";\n" +
        "for (let i = min; i <= max; answer += (i++ + ' ')) {\n" +
        "/*\n" +
        "    empty space\n" +
        "*/\n" +
        "}");
};

Ex4.onclick = function () {
    print("4)\n" + pyramid(20) + "\nOldfags don't triforce");
};

function primeNumbers(min, max) {
    if (isNaN(min) || isNaN(max)){
        alert("it's not a number");
        return;
    }

    let answer = [];
    prime:
        for (let i = min; i <= max; i++) {
        let counter = 2;
        while (counter < i){
            if ((i % counter++) === 0) continue prime;
        }
        answer.push(i);
    }
    return answer.join(' ');
}

function initBasket(goodsAmount) {
    let price = function (min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);
        return rand;
    };

    if (isNaN(goodsAmount)){
        alert("it's not a number");
        return;
    }

    let goods = [];
    for (let i = 0; i < goodsAmount; i++) {
        goods.push({price: price(0, 10), name: "product №" + i});
    }
    return goods;
}

function countBasketPrice(basket) {
    let result = 0;
    basket.forEach(function (product, i, basket) {
        result += product.price;
    });
    return result;
}

function getGoods(basket) {
    let result = "";
    basket.forEach(function (product, i, basket) {
        result += "    " + product.name + " price: " + product.price + '\n';
    });
    return result;
}

function thirdExercise(min, max) {
    if (isNaN(min) || isNaN(max)){
        alert("it's not a number");
        return;
    }

    let answer = "";
    for (let i = min; i <= max; answer += (i++ + ' ')) {
        /*
        empty space
         */
    }
    return answer;
}

function pyramid(height) {
    let build = function (height) {
        if (isNaN(height)) {
            alert("it's not a number");
            return;
        }

        let pyramid = [];
        for (let i = 0; i < height/2; i++) {
            pyramid.push(' ')
        }
        return pyramid;
    };

    let pyramid = build(height);
    let answer = '';
    switch (height % 2) {
        case 0:
            for (let i = 0; i < height; i+=2) {
                pyramid.shift();
                pyramid.push('▲');
                answer += (' ' + pyramid.join(' ') + '\n');
                pyramid.push('▲');
                answer += (pyramid.join(' ') + '\n');
            }
            return answer;
        case 1:
            for (let i = 0; i < height-1; i+=2) {
                pyramid.shift();
                pyramid.push('▲');
                answer += (' ' + pyramid.join(' ') + '\n');
                pyramid.push('▲');
                answer += (pyramid.join(' ') + '\n');
            }
            pyramid.shift();
            pyramid.push('▲');
            answer += (' ' + pyramid.join(' ') + '\n');
            return answer;
        default:
            return '';
    }

}

function print(str) {
    console.log(str);
}