console.log("\n\tSeja bem vindo(a)!\n\nDigite a sua idade:_\n");

let idadeCandidato = 18 // IDADE DO CANDIDATO

console.log(idadeCandidato + " anos.");

if(idadeCandidato < 18){
    console.log("\nDesculpe! O evento é para maiores de 18 anos.\n");
} else {
    console.log("\n\tLISTA DE EVENTOS \n\nPor favor, digite a data do evento desejado com números e barras:_\n\n\tdd/mm/yyyy\n");
}

let listaPalest = ["Thiago Rocha", "Odirlei Sabella"]; // PALESTRANTES

let contPalest = 0;

while (contPalest < listaPalest.length) {

    if (contPalest == 0) {
        console.log("1) 04/11/2021 - JAVASCRIPT\n   Palestrante: " + listaPalest[contPalest]);
    } else {
        console.log("\n2) 05/11/2021 - PYTHON\n   Palestrante: " + listaPalest[contPalest]);
    }

    contPalest++;
}

let dataAtual = 06/10/2021; // "DATA LOCAL" - VAR
const dataEvento = 04/11/2021; // DATA DO EVENTO ESCOLHIDO - CONS

if (dataEvento > dataAtual) {
    console.log("\nVerificando se ainda há vaga para este evento. Um momento, por favor...");
} else {
    console.log("\nInfelizmente o evento já ocorreu. \n\tSistema encerrado!")
}

let numParticip = 100; // QUANTIDADE DE PARTICIPANTES
let dataFim = dataAtual;

if (numParticip <=100) {
    console.log("\nFinalize o cadastro preenchendo os dados abaixo:")
    console.log("\nNome completo:_\nCPF (somente números):_\nE-mail:_")
    console.log("\n\tInscrição realizada com sucesso!\n \nEsteja às 19:30h no auditório do SENAI com a sua identidade.\n");
 } else {
    console.log("\nDesculpe! As vagas já foram todas preenchidas. \n\tEncerrando o sistema...")
}
let listaParticip = ["Bill Gates", "Elon Musk", "Lisa Jobs", "G. Rocha"];
let contParticip = 0;

    console.log("\n\tLISTA DE PARTICIPANTES\n");

while (contParticip < listaParticip.length) {

    if (contParticip == 0) {
        console.log(contParticip + " Nome do Participante: " + listaParticip[contParticip]);
    
    }else {
        console.log(contParticip + " Nome do Participante: " + listaParticip[contParticip]);
        
    }

    contParticip++;
}