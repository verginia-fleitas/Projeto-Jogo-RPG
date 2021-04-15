function Mago() {
    alert("Ao chegar em Resilia, você encontra Gerald e Scarlet e junta-se com eles para a última batalha em Frond-end, com a intenção de que no meio do caminho Scarlet te ensine todos os segredos das Forças Ocultas da DepWeeb. Para saber se irá conseguiu dominar a Mágica das Forças Ocultas acerte a pergunta:");
    while (true) {
        var respondapergunta1 = prompt("Andando por uma rua, um homem conta 10 árvores à sua direita. Na volta, conta 10 árvores à sua esquerda. Quantas árvores ele viu no total?\n1)20 \n2)10");

        if (respondapergunta1 == "1") {
            alert("Infelizmente, você precisa de mais habilidade. Na viagem a caminho a Frond-end vocês encontraram o exercito inimigo e morreram. Tente novamente.");
            location.reload()
            break
        }
        else if (respondapergunta1 == "2") {
            alert("Agora que chegou a Resilia, você tentará utilizar seus Poderes para teletransportar o Rei Java até vocês enquanto Scarlet e Gerald distraem o exercito. Para isso acerte a próxima pergunta.")
            FaseM2();
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")

        }
    }
}


function FaseM2() {
    alert("Agora que chegou a Resilia, você tentará utilizar seus Poderes para teletransportar o Rei Java até vocês enquanto Scarlet e Gerald distraem o exercito. Para isso acerte a próxima pergunta.");
    while (true) {
        var respondapergunta2 = prompt("Se são precisos 5 minutos para 5 máquinas produzirem 5 produtos, quanto tempo demorariam 100 máquinas a produzir 100 produtos? \n 1)São precisos os mesmos 5 minutos. \n2)São precisos os mesmos 15 minutos. ");

        if (respondapergunta2 == "1") {
            alert("Parabéns! Você é o cara, conseguiu transportar O rei Java e agora pode com seus poderes da DeepWeb mata-lo.");
            FaseM3();
                        
            break
        }
        else if (respondapergunta2 == "2") {
            alert("Infelizmente, o rei sabia que tentariam mata-lo e armou uma emboscada para vocês. Você e seus amigos morreram. Tente de novo não desista agora!")
            location.reload()
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")

        }
    }
}

function FaseM3() {
    alert(" Achou que era fácil tentar matar o rei Java. Vocês começaram a duelar e agora para lançar sua ultima mágia e salvar Resilia e seus amigos voce precisa acertar a ultima pergunta.");
    while (true) {
        var respondapergunta3 = prompt("25, 24, 22, 19, 15. Qual o próximo número? \n1)5 \n2)10");

        if (respondapergunta3 == "1") {
            alert("NÃOOOOOOOO! O rei java aguentou seu golpe e lançou um feitiço em vocês e seus amigos, todos morreram. eu Deus !!! O Rei foi mais rápido no último golpe e agora você morreu. Parabéns pela jornada bravo guerreiro, mas você não conseguiu.");
            location.reload()
            break
        }
        else if (respondapergunta3 == "2") {
            document.write("<h1>Parabéns! Você conseguiu lançar seu feitiço e agora salvou todos de Front-end e Resilia. E será reconhecido como o MESTRE DOS MAGOS.</h1>")
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")
            

        }
    }
}

