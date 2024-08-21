let vida = 100;
let checkpoint = false;
let inventario = []
let checkpoint1 = true;

function iniciarJogo() {
    alert("Seja bem-vindo, Fernando! Você está começando sua jornada como um atleta refugiado. Seu sonho é participar das Olimpíadas. Você enfrentará desafios, mas eu estarei aqui para te ajudar. Vamos começar!");
    alert("Você tem a escolha de sair do seu país e ir para o México, ou de continuar no seu país. Pense bem nas suas escolhas para conseguir realizar seu sonho.");
    escolha();
}

function escolha() {
    alert("1: Continuar em Cuba, apesar das dificuldades que vou enfrentar.");
    alert("2: Me refugiar no México e construir novas oportunidades.");

    let choice = prompt("Escolha 1 ou 2");

    if (choice == "1") {
        continuarEmCuba();
    } else if (choice == "2") {
        seRefugiar();
    } else {
        alert("Escolha inválida, tente novamente.");
        escolha();
    }
}

function continuarEmCuba() {
    alert("Você decidiu ficar em Cuba, mas enfrentou consequências. Depois de um acidente por conta dos conflitos em seu país, você se machucou.");
    vida -= 10;
    alert("Sua vida: " + vida);
    alert("O que você irá fazer agora?");
    alert("1: Continuar em Cuba, tentar se recuperar e voltar a treinar.");
    alert("2: Finalmente se refugiar em um lugar seguro e me cuidar do jeito certo.");

    let choice2 = prompt("Escolha 1 ou 2");

    if (choice2 == "1") {
        alert("Você não conseguiu se recuperar de forma correta e suas chances de realizar o sonho estão diminuindo. Tente novamente.");
        continuarEmCuba();
    } else if (choice2 == "2") {
        alert("Muito bem! Você conseguiu fugir e se recuperar. Agora, você tem uma nova chance para recomeçar.");
        seRefugiar();
    } else {
        alert("Escolha inválida. Tente novamente.");
        continuarEmCuba();
    }
}

function seRefugiar() {
    alert("Você escolheu fugir para o México. Você encontrou um lugar seguro para se abrigar e se recuperar.");
    alert("Para conseguir continuar nessa jornada de treinamento, você ganhou equipamentos novos de canoagem. Parabéns!");
    inventario.push("canoa e remos");
    alert("Você ganhou " +inventario)
    vida += 20;
    checkpoint = true;
    alert("Sua vida: " + vida);
    alert("Agora você tem a chance de treinar e se preparar para as Olimpíadas!");

    alert("1: Começar a treinar por conta própria.");
    alert("2: Procurar um profissional para lhe ajudar.");

    let choice3 = prompt("Escolha 1 ou 2");

    if (choice3 == "1") {
        alert("Você treinou sozinho e estava indo bem, mas um treinador te faria chegar mais longe, não acha?");
        vida -= 10;
        alert("Sua vida: " + vida);
    } else if (choice3 == "2") {
        alert("Com a ajuda de um profissional, você está tendo resultados melhores. Você está indo no caminho certo, não desista e continue assim!");
        alert("Você está indo super bem, não desista! Você ganhou uma conquista pela sua perseverança.");
        inventario.push("perseverança");
        alert("Você ganhou " +inventario)
        chegarÀsOlimpíadas();
    } else {
        alert("Escolha inválida. Tente novamente.");
        seRefugiar();
    }
}

function escolhas2(){
    alert("Cada dia que passa você melhora e está mais perto de chegar ao seu objetivo.");
    alert("Seu treinador lhe indicou para treinadores das Olimpíadas que ele conhece e você recebeu um convite para treinar fortemente e participar das Olímpiadas!");
    alert("Agora você tem a escolha de seguir seu sonho ou de continuar uma vide simples no México, treinando por hobbby");

    let choice4 = prompt("Escolha 1 ou 2");
    
    if (choice4 == "1") {
        alert("1: Ser treinado por um profissional das Olimpíadas e seguir meu sonho.");
        chegarÀsOlimpíadas();
    } else if (choice4 == "2") {
        alert("Viver uma vida tranquila no México treinando por diversão.");
        deixarMeuSonhoDeLado();
    } else {
        alert("Escolha inválida. Tente novamente.");
        escolhas2();
    }
}

function chegarÀsOlimpíadas() {
    alert("Incrível! Você está sendo treinado por um profissional das Olimpíadas! Cada vez mais perto do seu objetivo, não desista!");
    alert("Seu treinador lhe deu um certificado de canoagem pelo seu primeiro mil metro. Parabéns!");
    inventario.push("certificado");
    alert("Você ganhou " +inventario);
    chegarÀsOlimpíadas();
}

function deixarMeuSonhoDeLado(){
    alert("Você não vai para as Olimpíadas por livre escolha, que pena. Sua vida está acabando e você está desistindo.");
    vida -= 10;
    alert("Sua vida: " +vida); 
    deixarMeuSonhoDeLado();
}

function chegarÀsOlimpíadas() {
    alert("Um grupo de atletas refugiados, te convidou para participar do grupo e formar uma equipe de atletas refugiados.");
    alert("Agora você pode escolher entre participar da equipe ou tentar representar sozinho o seu país.");

    let choice5 = prompt("Escolha 1 ou 2");

    if (choice5 == "1") {
        alert("1: Você escolheu participar do grupo de refugiados. Seu sonho está mais próximo do que nunca!");
        chegarÀsOlimpíadas();
    } else if (choice5 == "2") {
        alert("Você não conseguiu representar seu país, ele está passando por desastres. Talvez você tenha perdido outra oportunidade de realizar seu sonho.");
        vida -= 20;
        alert("Sua vida: " +vida);
        chegarÀsOlimpíadas();
    } else {
        alert("Escolha inválida. Tente novamente.");
        escolhas2();
    }
}

function chegarÀsOlimpíadas(){
    alert("Seu grupo de refugiados se formou e em breve é o seu dia de mostrar ao mundo tudo que você aprendeu até hoje e quem sabe sair de Paris com uma medalha!");
    medalhaDeOuro();
}

function medalhaDeOuro() {
    alert("Você passou pela sua primeira competição! Logo mais os resultados vão sair e quem sabe você conquiste sua primeira medalha de ouro.");
    alert("Parabéns!! Você conquistou a sua primeira medalha de ouro! Eu fico muito feliz, viu como os esforços valeram a pena?!");
    inventario.push("medalha de ouro");
    alert("Você ganhou " +inventario)
    jogarNovamente();
}
function jogarNovamente() {
    alert("Você conquistou seus objetivos, chegamos ao fim! Fico feliz por ter feito parte dessa jornada com você. Deseja jogar novamente?");

    let choice6 = prompt("Escolha SIM ou NÃO");

    if (choice6 == "SIM") {
        alert("Ótimo, você vai jogar novamente, vamos iniciar!");
        iniciarJogo();
    } else {
        alert("Obrigado por jogar! Até a próxima.");
    }
}  

function fimDoJogo(){
    if (vida <= 0) {
        alert("Você não conseguiu realizar seu sonho. Tente novamente.");
        iniciarJogo();
    } else if (vida >= 100) {
        alert("Parabéns, Fernando! Você conquistou uma medalha de ouro e realizou seu sonho. Isso é ótimo!");
        alert("Eu te agradeço por termos participado dessa jornada juntos, infelizmente chegamos ao final. Foi maravilhoso jogar com você!");
    } else {
        alert("Escolha inválida. Tente novamente.");
    }
}

iniciarJogo();