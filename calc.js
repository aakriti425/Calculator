let result = 0;
let num1 = null;
let num2 = null;
let currop = null;
let digit = "";

const calcKey = document.querySelectorAll(".calc-key");
const clacScreen = document.querySelector("#calc-result");

const digitform = (key) => {
    if ((key >= "0" && key <= "9") || key === "00" || key === ".") {

        if (digit.length >= 10) return;
        if (key === "dot") {
            // Prevent multiple decimal points
            if (digit.includes(".")) return;

            // If user starts with '.', make it '0.'
            if (digit === "") {
                digit = "0.";
            } else {
                digit += ".";
            }
        }
        digit += key;
        clacScreen.innerText = digit;
    }
};

const operator = (num1, num2, currop) => {

    switch (currop) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = (num1 * num2)/100;
            break;
        case "root":``
            result = Math.sqrt(num1);
            break;

    }
    clacScreen.innerText = result;
    digit = result.toString();
    num1 = result;
    num2 = null;
    currentOperator = "";
}

const calcreset = (key) => {
    clacScreen.innerText = "0";
    digit = "";
    num1 = null;
    num2 = null;
    currop = null;
}

calcKey.forEach((keys) => {
    keys.addEventListener("click", () => {
        const key = keys.getAttribute("id");
        digitform(key);

        if (key === "+" || key === "-" || key === "*" || key === "/" || key === "%" || key === "root") {

            num1 = Number(digit);
            currop = key;
            digit = "";
        }
        if (key === "dot") {
            num1 = num1 / 10;
        }
        if (key === "=") {
            num2 = Number(digit);
            operator(num1, num2, currop);
            num1 = result;
        }

        if (key === "ac") {
            calcreset(key);
        }
    })
})