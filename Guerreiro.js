function Guerreiro() {
    alert("Você encontrou Scarlet e Harold eles serão seus parceiros de viagem.\nPara você ir em segurança até Front-ed você precisa responder a pergunta a seguir:");
    while (true) {
        var respondapergunta1 = prompt("De três irmãos – José, Adriano e Caio -, sabe-se que ou José é o mais velho ou Adriano é o mais moço. Sabe-se também que ou Adriano é o mais velho ou Caio é o mais velho. Quem é o mais velho e quem é o mais moço dos três irmãos?\n1) José é o mais moço e Adriano é o mais velho.\n2)Adriano é o mais moço e Caio é o mais velho.");

        if (respondapergunta1 == "1") {
            alert("Vocês estavam meio da viagem foram capturados pelos guerreiros de Front-end e infelizmente vieram a falecer. Calma, guerreiro sua morte será honrada jogue novamente.");
            location.reload()
            break
        }
        else if (respondapergunta1 == "2") {
            alert("Parabéns Gerald, vocês conseguiram chegar em segurança sem encontrar os guerreiros de Front-end. Vamos para o próximo enigma.")
            Fase2();
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")

        }
    }
}


function Fase2() {
    alert("Você consegueiu entrar no castelo de Front-end e entrar na sala do rei e chama ló para um duelo de espadas que você treinou e sonhou a tantos anos para o rei aceitar o duelo vc deve aceitar a pergunta a seguir:");
    while (true) {
        var respondapergunta2 = prompt("O Sr. Smith tem 4 filhas. Cada uma de suas filhas tem 1 irmão. Quantos filhos Sr. Smith tem ao todo?\n 1)Cinco \n2)Oito ");

        if (respondapergunta2 == "1") {
            alert("Parabéns! O Rei Java, convocou um duelo entre vocês dois onde poderá honrar a morte de seus pais. Será que você conseguirá vencer essa batalha?");
            Fase3();
            
            break
        }
        else if (respondapergunta2 == "2") {
            alert("Que pena! O Rei chamou seus soldados e você foi morto. Parabéns por ter vindo até aqui. Comece novamente.")
            location.reload()
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")

        }
    }
}

function Fase3() {
    alert(" O tão espero duelo começou você conseguiu atingir o Rei e está prestes a encerrar está batalha. Para conseguir matar Java você precisa acertar a ultima questão.");
    while (true) {
        var respondapergunta3 = prompt("Se ontem fosse amanhã, hoje seria sexta-feira. Que dia é hoje? \n1)Terça-feira \n2)Quarta-Feira");

        if (respondapergunta3 == "1") {
            alert("Meu Deus !!! O Rei foi mais rápido no último golpe e agora você morreu. Parabéns pela jornada bravo guerreiro, mas você não conseguiu.");
            location.reload()
            break
        }
        else if (respondapergunta3 == "2") {
            document.write("<h1>Parabéns!!!! Você matou o Rei Java e conseguiu acabar com a guerra de 200 anos. O povo de Resilia é muito grato pela sua bravura.</h1>")
            break
        }
        else {
            alert("Jogador escolha 1 ou 2")
           
        }
    }
}

