const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', function (e) {
  const key = e.key;
  const allowed = '0123456789+-*/().';

  if (allowed.includes(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key === 'Escape') {
    clearDisplay();
  }
});