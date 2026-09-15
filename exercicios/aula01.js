// Aula 01 - Um botao que lembra
// Responda abaixo. Mantenha os marcadores e nao apague os enunciados.
// ex1
// Escreva a linha que cria uma variavel chamada visto guardando o valor falso.
//   let visto = false;

// ex2
// Diga o que cada comparacao devolve, true ou false:
//   5 === 5
//   "5" === 5
//   "5" == 5
//   true === false
// ex3
// O trecho abaixo roda sem dar erro, mas apoiar um cartao bagunca os outros.
// Diga por que, e escreva a correcao.
//   
//
//   document.querySelectorAll(".apoiar").forEach(function(botao) {
//    let apoiado = false;
//  botao.addEventListener("click", function() {
// });
//});
//

// ex4
// Complete o if/else para o botao voltar a dizer Apoiar quando o apoio for retirado.
//
//   if (apoiado === false) {
//  botao.textContent = "Apoiado";
//} else {
//  botao.textContent = "Apoiar";
//}

// ex5
// Este exercicio eh feito no index.html, nao aqui.
// Acrescente ao Radar um quarto cartao, com um problema real da sua escola,
// e faca o botao dele funcionar igual aos outros.
// Escreva aqui, em uma linha, o que voce mudou na pagina.

//resposta:Adicionei uma nova estrutura de cartão (<div class="cartao">) dentro da secao do Radar mantendo o botão com a classe "apoiar".

// ex6
// Um cartao precisa nascer ja apoiado: contagem em 1 e botao escrito Apoiado.
// O que voce mudaria no JavaScript para ele funcionar direito desde o primeiro clique?
// E por que a sua solucao nao serve para os outros cartoes?

//O que mudar: Na declaração do estado desse cartão específico, inicializaria a variável como `let apoiado = true;`.
// Por que não serve para os outros: Os demais cartões começam não apoiados (`false`). Se inicializarmos todos com `true`, no primeiro clique o código entenderá que o usuário está removendo o apoio de um cartão que nunca recebeu um.


