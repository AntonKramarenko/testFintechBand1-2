const currentInputValue = document.getElementById('inputId');
const solutionOutput = document.querySelector('.section-task1_solution')

let value = 0;

function inputMask(selectInput) {
    let numberValue = selectInput.value.replace(/[^\d.]/g, '');
    let point = numberValue.indexOf('.');
    if (point != -1) { // if point true ->
        if ((numberValue.length - point) > 3) {
            numberValue = numberValue.slice(0, -1);
        }
    }
    setCurrentValue(numberValue)
    return selectInput.value = numberValue;
};

function setCurrentValue(currentValue) {
    value = currentValue;
}

function numberFormater(number, format) {
    let numberValue = Number(number)
    let formatingNumber = new Intl.NumberFormat(format).format(numberValue)
    return formatingNumber.replace(',', '.')
}

function setSolutionOutput(value, format) {
    solutionOutput.innerHTML = numberFormater(value, format)
}

function clickInputHandler() {
    inputMask(currentInputValue)
    setSolutionOutput(value, 'ru-RU')
}
