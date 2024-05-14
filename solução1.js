

function CalcularRankeadas(vitorias, derrotas){
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

console.log(`O Herói tem o saldo de ${saldoVitoria} vitórias e é nível ${nivel}`)

}

CalcularRankeadas(80,12)

