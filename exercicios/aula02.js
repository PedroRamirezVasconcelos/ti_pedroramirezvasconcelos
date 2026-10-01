//aula 02
//questoes
1)Os pares que reprovam na régua de 4,5:1 são #888888 no #FFFFFF e #CCCCCC no #FFFFFF
2)a)alt="Fila da cantina a dobrar o corredor no intervalo" - A regra dita que precisa escrever a informação que a pessoa perderia caso a imagem não carregasse
b)alt="Logótipo da escola" - Identifica a função da imagem de forma curta.
c) alt=Imagens que servem de decoração devem ter o alt vazio, permitindo que os leitores da tabela pulem essa imagem sem a ler. Atenção que um alt vazio é diferente de omitir o alt
3)O trecho de código falha porque transmite o sucesso da ação apenas através da mudança de cor para verde. Pessoas com dificuldade não vão perceber a alteração
//correto:
    botao.addEventListener("click", function() {
    botao.style.backgroundColor = "green";
    botao.innerText = "Apoiado"; // Transmite a informação em texto
});
4) adicionou um titulo mostrando diretamente pra que serve o site e mudou tambem
que quando voce clica no apoiar fica contornado de preto mostrando que a pessoa
ja clicou em apoiar
5)Uma pessoa que nunca viu a página entenderia o que ela faz em 5 segundos?
  Dá para saber, olhando o cartão parado, se você já apoiou ou não?
  O texto de todos os cartões é legível quando você aperta os olhos?
  
  o primeiro e porque precisa ser direto porque se for confuso ninguem vai querer usar o codigo
  o segundo e para pessoas com dificuldade saber indentificar
  o terceiro e para pessoas com problema de visao conseguir ver