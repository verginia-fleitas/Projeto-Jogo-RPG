function Bruxa() {
    alert("Você venceu os perigos até Resilia e agora quer reunir forças para vencer Java. Encontrou o bravo guerreiro Gerald e o Mago Harold para saber se eles irão aceitar sua proposta você deve aceitar a pergunta a seguir:");
    while (true) {
        var respondapergunta1 = prompt("O que é, o que é? Que mesmo atravessando o rio consegue não se molhar.\n1)O peixe \n2)A ponte");

        if (respondapergunta1 == "1") {
            alert("Que pena! Eles não aceitaram sua ajuda com medo de você ser aliada do Rei Java. Talvez se você apertar F5 e reniciar o jogo eles topem essa missão.");
            location.reload()
            break
        }
        else if (respondapergunta1 == "2") {
            alert("Parabéns !!! Eles aceitaram, juntos são mais forte para vencer essa missão.")
            FaseB2();
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")

        }
    }
}


function FaseB2() {
    alert("Para chegarem até frond-end em segurança sem encontrar perigos no caminho acerte a próxima pergunta:");
    while (true) {
        var respondapergunta2 = prompt("O que não anda, mas pode circular o mundo?\n1)A noticia \n2)O Sol");

        if (respondapergunta2 == "1") {
            alert("Parabéns! Você conseguiu chegar a Front-end e agora vai conseguir revelar a todos sobre um segredo que vem guardando a muito tempo.");
            FaseB3();
            
            break
        }
        else if (respondapergunta2 == "2") {
            alert("Não foi dessa vez! Vocês encontraram o exercito inimigo e morram na batalha. Tente novamente.")
            location.reload()
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")

        }
    }
}

function FaseB3() {
    alert("Agora que está em front-end você pode revelar que você é a rainha de Front-end e que seu marido Java é uma pessoa horrivel. Como viveu anos ao lado desse homem perverso só você sabe sua verdadeira fraqueza a mágica oculta da Deepweb. Para lançar seu feiticho e derrota -lo você deve acertar a última pergunta:");
    while (true) {
        var respondapergunta3 = prompt("O que é, o que é? É irmã de minha tia e não é minha tia.\n1)Minha vó \n2)A minha mãe");

        if (respondapergunta3 == "1") {
            alert("Que pena! O Rei descobriu que você viria para se vingar e armou uma armadilha. Infelizmente você morreu na batalha. Tente de novo.");
            location.reload()
            break
        }
        else if (respondapergunta3 == "2") {
            document.write("<h1>Graças a sua persistência você conseguiu derrotar esse homem perverso e se tornar a Rainha de Frond-end e declarar paz aos cidadões de Resilia, casando-se com o Guerreiro Gerald.</h1>");
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")

        }
    }
}

