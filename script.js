const dropdowns = document.querySelectorAll('.dropdown'); // Use querySelectorAll to select all dropdowns

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li'); // Use querySelectorAll to select all li elements
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            select.querySelector('span').innerText = option.innerText; // Update the text of the selected option

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});

document.getElementById('tempo').addEventListener('input', function () {
    var valor = this.value;
    
    // Verifica se o valor é negativo
    if (valor < 0) {
        this.value = ''; // Limpa o campo se o valor for negativo
    }
});

function calcularConsumo() {
    var potencia = document.querySelector('.select span').innerText.replace('W', ''); // Remove 'W' para obter o valor numérico
    var tempoMinutos = document.getElementById('tempo').value;

    var tempoHoras = Math.abs(tempoMinutos) / 60; // Converter minutos em horas
    var consumo = (potencia * tempoHoras) / 1000; // Consumo em kWh

    // Atualizar o consumo em kWh
    document.querySelector('.consumo').innerText = consumo.toFixed(2) + ' kWh';

    var precoKWh = 0.92; // Preço por kWh em reais
    var custo = consumo * precoKWh; // Cálculo do custo

    // Atualizar o custo em reais
    document.querySelector('.custo').innerText = 'R$ ' + custo.toFixed(2);

    // Tornar a seção de resultados visível
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('caixaResultado').style.display = 'flex';
}


