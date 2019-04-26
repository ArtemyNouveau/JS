var pressedHello = false;
var chessExist = false;

Ex1.onclick = function () {
    if (pressedHello) sayPrivet();
    else sayHello();

    function sayHello() {
        let button = document.getElementById("Ex1");
        let text = button.nextElementSibling;
        text.classList.add("show");
        button.value = "А по нормальному?";
        pressedHello = true;
    }

    function sayPrivet() {
        let button = document.getElementById("Ex1");
        let text = button.nextElementSibling;
        text.innerText = "привет!";
        button.value = "Во! Теперь хорошо";
    }
};

Ex2.onclick = function () {
    let bold = document.getElementById("replaceTag");
    let headline = document.createElement("h3");

    headline.innerText = bold.innerText;
    replaceNode(bold, headline);
};

Ex3.onclick = function () {
    let list = document.getElementById("changeToText");
    let textNode = document.createElement("p");
    let text = list.innerHTML.replace(/<li>/g, "").replace(/>\n/g, "");

    for (let i = 0; i < 1000; i++) {
        text = text.replace("</li", " №" + i + ", ");
    }
    textNode.innerText = text;
    replaceNode(list, textNode)
};


function replaceNode(removeElement, newElement){
    removeElement.parentNode.insertBefore(newElement, removeElement);
    removeElement.parentNode.removeChild(removeElement);
}

Ex4.onclick = function () {
    let a = +document.getElementById("firstNum").value;
    let b = +document.getElementById("secondNum").value;
    let operator = document.getElementById("operation").value;

    let answer = document.createElement("div");
    answer.classList.add("form-group");
    answer.innerHTML = "<input class=\"form-control\" type=\"text\" placeholder=\"" + a + " " + operator + " " + b + " = " + calculate(a, operator, b) + " \" readonly>";
    document.getElementById("Ex4").parentNode.parentNode.appendChild(answer);

    function calculate(a, operator, b) {
        switch (operator) {
            case '+':
                return a+b;
            case '-':
                return a-b;
            case '*':
                return a*b;
            case '/':
                return a/b;
            case '^':
                return Math.pow(a, b);
            default:
                return  'none'
        }
    }
};

Ex5.onclick = function () {
    if (chessExist) return;

    let chess = document.getElementById("chess");
    let blackCell = false;
    let blackFigure = true;

    for (let i = 0; i < 8; i++) {
        /*
        add numbers to rows
         */
        let num = document.createElement("div");
        num.innerHTML = "<p>" + i + "</p>";
        chess.appendChild(num);

        /*
        depending on serial number of the row choose further action
         */
        switch (i) {
            case 0:
            case 7:
                /*
                add figures to table
                 */
                for (let j = 0; j < 8; j++) {
                    let figure = document.createElement("div");
                    figure.innerHTML = "<p>" + Figures[j] + "</p>";
                    if (blackCell) figure.classList.add("blackCell");
                    if (!blackFigure) figure.classList.add("whiteFig");
                    blackCell = !blackCell;
                    chess.appendChild(figure);
                }
                break;
            case 1:
            case 6:
                /*
                add paws on table
                 */
                for (let j = 0; j < 8; j++) {
                    let pawn = document.createElement("div");
                    pawn.innerHTML = "<p>" + Pawn + "</p>";
                    if (blackCell) pawn.classList.add("blackCell");
                    if (!blackFigure) pawn.classList.add("whiteFig");
                    blackCell = !blackCell;
                    chess.appendChild(pawn);
                }
                blackFigure = false;
                break;
            default:
                /*
                add empty cells
                 */
                for (let j = 0; j < 8; j++) {
                    let cell = document.createElement("div");
                    if (blackCell) cell.classList.add("blackCell");
                    blackCell = !blackCell;
                    chess.appendChild(cell);
                }
        }
        blackCell = !blackCell;
    }

    /*
    fill last row with letters
     */
    let cell = document.createElement("div");
    chess.appendChild(cell);
    for (let i = 65; i < 73; i++) {
        let num = document.createElement("div");
        num.innerHTML = "<p>" + String.fromCharCode(i) + "</p>";
        chess.appendChild(num);
    }

    chessExist = true;
};