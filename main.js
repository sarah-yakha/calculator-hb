
// Переменные для хранения значений дисплея и операторов
let currentOperand = '';
let previousOperand = '';
let currentOperation = null;
const display = document.getElementById('display');
const deleteButton = document.querySelector('[data-delete]')
// Обновление дисплея
function updateDisplay() {
    display.textContent = formatNumber(currentOperand) || '0';
}

   // Форматирование числа для удаления ведущих нулей
   function formatNumber(number) {
    if (number === '') return '0';
    const [integerPart, decimalPart] = number.split('.');
    const formattedIntegerPart = parseInt(integerPart, 10).toString(); 
    if (decimalPart != null) {
        return `${formattedIntegerPart}.${decimalPart}`;
    } else {
        return formattedIntegerPart;
    }
}

//удаление числа
function deleteNumber() {
  currentOperand = currentOperand.toString().slice(0, -1);
  updateDisplay();
}

// Добавление числа к текущему операнду
function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number.toString();
    updateDisplay();
}

// Выбор операции
function chooseOperation(operation) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        operateCalculation();
    }
    currentOperation = operation;
    previousOperand = currentOperand;
    currentOperand = '';
}

// Выполнение вычисления
function operateCalculation() {
    let result = operate(currentOperation, previousOperand, currentOperand);
    if (typeof result === 'number' && !Number.isInteger(result)) {
        result = result.toFixed(2); // Округляет результат до двух знаков после запятой
    }
    currentOperand = result.toString();
    currentOperation = null;
    previousOperand = '';
  
    updateDisplay();
}

// Очистка дисплея и всех значений
function clear() {
    currentOperand = '';
    previousOperand = '';
    currentOperation = null;
    updateDisplay();
}

// Обработка нажатий на кнопки
document.querySelectorAll('[data-number]').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

document.querySelectorAll('[data-operation]').forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.textContent);
    });
});

document.querySelector('.equal').addEventListener('click', button => {
    operateCalculation();
});

document.querySelector('.clear').addEventListener('click', button => {
    clear();
});

deleteButton.addEventListener('click', button => {
  deleteNumber();
});



