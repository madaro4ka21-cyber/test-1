const nameInput = document.querySelector('#name');
const out = document.querySelector('#out');

nameInput.addEventListener('input', function() {
    out.textContent = 'Привет, ' + nameInput.value;
});

function isEven(n) {
    return n % 2 === 0;
}

document.querySelector('#evenBtn').addEventListener('click', function() {
    const n = Number(document.querySelector('#evenNumber').value);
    document.querySelector('#evenResult').textContent =
        isEven(n) ? 'Чётное' : 'Нечётное';
});

document.querySelector('#priceBtn').addEventListener('click', function() {
    const value = document.querySelector('#price').value;
    const price = Number(value);
    const result = document.querySelector('#priceResult');

    if (value.trim() === '' || !Number.isFinite(price)) {
        result.textContent = 'Введите число';
    } else {
        result.textContent = (price * 1.2).toFixed(2);
    }
});

document.querySelector('#numberBtn').addEventListener('click', function() {
    const value = document.querySelector('#number').value;
    const number = Number(value);
    const result = document.querySelector('#numberResult');

    if (value.trim() === '' || !Number.isFinite(number)) {
        result.textContent = 'Введите число';
    } else {
        result.textContent = number * number;
    }
});