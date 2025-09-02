let display = document.getElementById("displayBoard");

function insert(value) {
    display.value = display.value + value;
}

function AllClear() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let curString = display.value;
    let numbers = [];
    let ops = [];
    let num = "";
    for (let i = 0; i < curString.length; i++) {
    let ch = curString[i];
    if ((ch >= "0" && ch <= "9") || ch === ".") {
        num += ch;
        } else if (ch === "+" || ch === "-" || ch === "*" || ch === "/") {
            numbers.push(parseFloat(num));
            ops.push(ch);
            num = "";
        }
    }
    numbers.push(parseFloat(num));
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "*" || ops[i] === "/") {
        let left = numbers[i];
        let right = numbers[i + 1];
        let result;
        if (ops[i] === "*") {
            result = left * right;
        } else {
            if (right === 0) {
            display.value = "Division by zero is NonDefined";
            return;
            }
            result = left / right;
        }
        numbers.splice(i, 2, result);
        ops.splice(i, 1);
        i--;
        }
    }
    let result = numbers[0];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
        result += numbers[i + 1];
        } else if (ops[i] === "-") {
        result -= numbers[i + 1];
        }
    }
    display.value = result;
}
