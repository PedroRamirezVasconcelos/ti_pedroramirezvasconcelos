// soma um apoio
let botoesApoiar = document.querySelectorAll('.apoiar');
botoesApoiar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        let cartao = botao.parentElement;
        let display = cartao.querySelector('.contagem');
        let valor = Number(display.textContent);
        valor++;
        display.textContent = valor;
    });
});

// tira um apoio, sem deixar ficar negativo
let botoesRemover = document.querySelectorAll('.remover');
botoesRemover.forEach(function(botao) {
    botao.addEventListener('click', function() {
        let cartao = botao.parentElement;
        let display = cartao.querySelector('.contagem');
        let valor = Number(display.textContent);

        if (valor > 0) {
            valor--;
            display.textContent = valor;
        }
    });
});