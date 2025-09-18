const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    let result;

    if (isNaN(min) || isNaN(max) || min > max) {
        result = 'Valor Inválido';
    } else {
        result = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    document.querySelector('#result > span').textContent = result;
});
