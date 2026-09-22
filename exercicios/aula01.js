
// ex1
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.
let visto = false;

// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5 -> true
//   "5" === 5 -> false
//   "5" == 5 -> true
//   true === false -> false

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
// Por que: A variável apoiado foi declarada fora do .forEach, no escopo global/externo. Com isso, todos os cartões compartilham a mesma variável de controle, de modo que alterar o estado em um cartão altera para todos os outros.
//
// Correção (mover a declaração para dentro do loop de cada cartão):
document.querySelectorAll(".apoiar").forEach(function(botao) {
let apoiado = false;
botao.addEventListener("click", function() {
// ...
});
});

// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = ______________;
//   }

//   if (apoiado === false) {
//     botao.textContent = "Apoiado";
//   } else {
//     botao.textContent = "Apoiar";
//   }

// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.

Adicionei um quarto cartão <article> no HTML contendo a classe .apoiar em seu botão.

// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?

No JavaScript, inicializaria a variável de estado do cartão específico como let apoiado = true;. Essa solução não serve para os outros cartões porque os demais começam desapoiados, exigindo o valor inicial false para responder corretamente ao primeiro clique.