
function getHistory() {
    return (document.getElementById('history-value').innerText);
}

function printHistory(arr) {
    document.getElementById("history-value").innerText = "";
    arr.forEach(function (value) {
        document.getElementById("history-value").innerText += value;
    })

}

function printOutput(num) {
    document.getElementById("output-value").innerText = getFormattedNumber(num);
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function getFormattedNumber(num) {
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function deleteAll() {
    document.getElementById("output-value").innerText = "";
    document.getElementById("history-value").innerText = "";

}



function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
}


const operator = document.getElementsByClassName("operator");
let numbersAndOperators = [];
const history = document.getElementById("history-value").innerText;
for (let i = 0; i < operator.length; i++) {


    operator[i].addEventListener('click', function () {
        if (!(history === '')) {

            if (this.id === '=') {
                let str = getHistory();

                num = eval(str);
                printOutput(num);


            } else if (this.id === 'clear') {

                deleteAll();
                numbersAndOperators = [];

            } else if (this.id === 'backspace') {


                numbersAndOperators.pop()
                printHistory(numbersAndOperators);


            } else if (this.id === '%') {
                numbersAndOperators.push('/100');
                printHistory(numbersAndOperators);

            }
            else {
                numbersAndOperators.push(this.id);
                printHistory(numbersAndOperators);

            }
        } else {
            alert(`Please select a number first`);

        }



    })
}
const number = document.getElementsByClassName("number");
let num = '';
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {

        num = this.id;
        numbersAndOperators.push(num);


        printHistory(numbersAndOperators);
    })
}

function calculator() {

}