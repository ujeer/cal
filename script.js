
const displayScreen = document.querySelector('.display-screen');
const numButtons = document.querySelectorAll('.num-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const clearButton = document.querySelector('.clear-button');
const backspaceButton = document.querySelector('.backspace-button');
const equalsButton = document.querySelector('.equals-button');

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    const num = button.textContent;
    displayScreen.textContent = displayScreen.textContent === '0' ? num : displayScreen.textContent + num;
  });
});


operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent;
   
    const lastChar = displayScreen.textContent.slice(-1);
    if (!['+', '-', '*', '/'].includes(lastChar)) {
      displayScreen.textContent += operator;
    }
  });
});

clearButton.addEventListener('click', () => {
  displayScreen.textContent = '0';
});


backspaceButton.addEventListener('click', () => {
  const currentText = displayScreen.textContent;
  displayScreen.textContent = currentText.length > 1 ? currentText.slice(0, -1) : '0';
});


equalsButton.addEventListener('click', () => {
    try {
      const expression = displayScreen.textContent;
      const parts = expression.split(/([+*/-])/);
      let result = parseFloat(parts[0]);
      for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const operand = parseFloat(parts[i + 1]);
        switch (operator) {
          case '+':
            result += operand;
            break;
          case '-':
            result -= operand;
            break;
          case '*':
            result *= operand;
            break;
          case '/':
            result /= operand;
            break;
        }
      }
      displayScreen.textContent = result.toString();
    } catch (error) {
      displayScreen.textContent = 'Error';
    }
  });
