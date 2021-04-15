
function iniciar() {

    alert("Em uma era medieval chamada Terra Média, dois reinos estão em constante guerra há mais de 200 anos. Resília tem como rei, um elfo chamado Script. \nEle é brilhante e transformou Resília em uma grande metrópole muito rica e populosa que virou o centro de comércio da Terra Média. \nFront End, o reino rival de Resília é comandado por Java, um tirano mestre da magia negra que tem como objetivo de vida fazer que todos se curvem aos seus pés e o reverenciem");


    var escolhaumperosnagem = prompt("Escolha um personagem:\n 1- Guerreiro Gerald, 2- Bruxa Scarlet , 3- Mago Herold");
    if (!(escolhaumperosnagem == "1" || escolhaumperosnagem == "2" || escolhaumperosnagem == "3")) {
        alert("Atenção Jogador!Escolha um dos três personagens");
    }
    else if (escolhaumperosnagem == "1") {
        alert("Parabéns, jogador você escolheu: \nGeralt,\nNascido em Resília, perdeu sua família para um mestre de magia negra chamado Java quando tinha 10 anos. Ao atingir a maioridade, Geralt se tornou um guerreiro de Resília e só pensa em se vingar.");
        Guerreiro()
    }
    else if (escolhaumperosnagem == "2") {
        alert("Parabéns,Jogador você escolheu: \nScarlet, \nOrigem desconhecida, apesar de ter nascido de pais humanos,ela é uma bruxa muito poderosa e atualmente está refugiada em Resília com o objetivo de formar uma sociedade");
        Bruxa()
    }
    else if (escolhaumperosnagem == "3") {
        alert("Parabéns,Jogador você escolheu: \nHarold, \nNascido em um pequeno vilarejo ao norte de Resília, nasceu com o dom da magia, porém o seu vilarejo não abriga ninguém capaz de ensiná-lo controlar sua magia, por isso Harold aspira se mudar para a cidade e trabalhar para conseguir um professor que possa ajudá-lo.");
        Mago()
    }

}

