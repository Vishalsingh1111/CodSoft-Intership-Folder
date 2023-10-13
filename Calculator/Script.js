function appendToDisplay(value) {
    document.calc.txt.value += value;
}

function clearDisplay() {
    document.calc.txt.value = '';
}

function calculateResult() {
    try {
        document.calc.txt.value = eval(document.calc.txt.value);
    } catch (error) {
        document.calc.txt.value = 'Error';
    }
}
