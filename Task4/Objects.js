Ex1.onclick = function () {
    class Number {
        constructor(num) {
            if (isNaN(num) || num > 999 || num < 0) {
                alert("wrong number");
                return;
            }

            this.ones = num % 10;
            this.tens = ((num % 100) - this.ones) / 10;
            this.hundreds = ((num % 1000) - this.tens - this.ones) / 100;
        }
    }
    let number = new Number(prompt("enter any number in range [0, 999]"));
    print(number)
};

Ex2.onclick = function () {
    let questions = [
        {
            question: "Lorem...",
            answers: ["dolor", "ipsum", "sit ", "amet"],
            correct: 1
        },
        {
            question: "Lorem ipsum...",
            answers: ["lorem", "amet", "sit", "dolor"],
            correct: 3
        },
        {
            question: "Lorem ipsum dolor...",
            answers: ["consectetur", "sit", "amet", "ipsum"],
            correct: 1
        },
        {
            question: "Lorem ipsum dolor sit...",
            answers: ["consectetur", "adipiscing", "amet", "ipsum"],
            correct: 2
        },
        {
            question: "Lorem ipsum dolor sit amet...",
            answers: ["consectetur", "adipiscing", "amet", "ipsum"],
            correct: 0
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur...",
            answers: ["consectetur", "adipiscing", "amet", "adipiscing "],
            correct: 3
        },
        {
            question: "Lorem ipsum dolor sit amet, consectetur adipiscing...",
            answers: ["consectetur", "elit", "amet", "adipiscing "],
            correct: 1
        },
    ];
    let game = function (questions) {
        let check = function(question){
            return document.getElementById(questions[question].correct).checked;
        };
        let fillDoc = function (question) {
            document.getElementById("question").innerHTML = questions[question].question;
            for (let j = 0; j < 4; j++) {
                document.getElementById("answer" + j).innerHTML = questions[question].answers[j];
            }
        };
        let i = 0;
        let score = 0;
        document.getElementById("score").innerText = score + "/0";
        fillDoc(i);
        setTimeout(function tick(){
            if (check(i++)) score++;

            document.getElementById("score").innerText = score + "/" + i;
            if (i >= questions.length) {
                document.getElementById("answers").style.display = "none";
                document.getElementById("question").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
                return;
            }

            fillDoc(i);
            setTimeout(tick, 1000);
        }, 1000);

        return score
    };
    let score = game(questions);
    if (score === 7) alert("you won!")
};
function print(str) {
    console.log(str);
}