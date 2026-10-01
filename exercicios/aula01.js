// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.

// ex1
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.
let visto = false

// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5 = true
//   "5" === 5 =false
//   "5" == 5 = true
//   true === false = false


// ex3
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//
//   let apoiado = false;
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//     botao.addEventListener("click", function() {
//       // ...
//     });
//   });
a variavel apoiado ta no escopo global, dai todos os botoes compartilham a mesma variavel de controle, dai o clique em um botao muda todos os outros
   //codigo correto:
   document.querySelectorAll(".apoiar").forEach(function(botao) {
  let apoiado = false;
  botao.addEventListener("click", function() {
  });
});
// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
     botao.textContent = ______"apoiar________;
//   }


// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.
Dupliquei a estrutura html de um cartão no index.html, alterei o texto do problema para "comida falta quase todos dias" e dai mantive a classe .apoiar no novo botao

// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?
 mudar: comecar a variável desse cartão com o valor true (let apoiado = true;)
 porque nao funciona:porque eles comecam com let apoiado = false, se inicializar com =true ira funcionar