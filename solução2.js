const prompt = require("readline-sync") // Importa o módulo prompt-sync para interação com o usuário

let continuar = true; // Variável para controlar a execução do loop

while (continuar) {
  function CalcularRankeadas(vitorias = Number(prompt.question(`Quantas vitorias?`)), 
  derrotas = Number(prompt.question(`Quantas derrotas? `))){
    let saldoVitoria = vitorias - derrotas
  
    let nivel
  
    switch(true){
      case saldoVitoria < 10 :
        nivel = "Ferro";
        break;
      case saldoVitoria >= 11 && saldoVitoria <= 20 :
        nivel = "Bronze";
        break;
      case saldoVitoria >= 21 && saldoVitoria <= 50 :
        nivel = "Prata";
        break;
      case saldoVitoria >= 51 && saldoVitoria <= 80 :
        nivel = "Ouro";
        break;
      case saldoVitoria >= 81 && saldoVitoria <= 90 :
        nivel = "Diamante";
        break;
      case saldoVitoria >= 91 && saldoVitoria <= 100 :
        nivel = "Lendário";
        break;
      case saldoVitoria >= 101 :
        nivel = "Imortal";  
        break;
      default:
        console.log("Hmm, não encontramos seu nível, lembre de passar o numero de vitórias e derrotas!")
  
    }
  
    mensagemNivel ()

    function mensagemNivel (){
      console.log("=============================================");
      console.log(`O Herói tem o saldo de ${saldoVitoria} vitórias e seu é nível ${nivel}`);
      console.log("=============================================");
    }
  
  }

  CalcularRankeadas()


  // Pergunta ao usuário se deseja continuar inserindo novos jogadores
  let resposta = prompt.question("Deseja verificar outro jogador? (s/n) ");
  if (resposta.toLowerCase() !== 's') {
    continuar = false; // Se a resposta não for 's', interrompe o loop
  }
}

console.log("Fim!");
