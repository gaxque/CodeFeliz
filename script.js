document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const quoteText = document.getElementById('quoteText');

    const quotes = [
        "Eu sou capaz de alcançar qualquer objetivo que eu defina.",
        "Minha determinação é mais forte do que qualquer desafio.",
        "Cada obstáculo é uma oportunidade para eu crescer.",
        "Eu me perdoo e aprendo com meus erros passados.",
        "Eu sou digno de amor, respeito e sucesso.",
        "A cada dia, eu me torno uma versão melhor de mim mesmo.",
        "Eu escolho ser feliz e grato todos os dias.",
        "Eu sou corajoso, ousado e destemido.",
        "Minha vida está cheia de propósito e significado.",
        "Eu mereço todas as coisas boas que a vida tem a oferecer.",
        "Eu sou suficiente exatamente como eu sou.",
        "Eu libero qualquer necessidade de provar meu valor aos outros.",
        "Eu sou livre para criar a vida exatamente como eu quero.",
        "Eu sou capaz de conquistar todos os meus medos.",
        "Eu escolho me levantar após cada queda.",
        "Eu sou forte o suficiente para superar qualquer desafio.",
        "Eu honro meu corpo alimentando-o com comida saudável e exercício.",
        "Eu sou grato pela oportunidade de acordar e viver hoje.",
        "Eu vejo falhas como oportunidades para aprender e crescer.",
        "Eu mereço o sucesso e vou alcançá-lo.",
        "Eu mereço ser amado e aceito exatamente como eu sou.",
        "Eu mereço paz, amor e alegria em minha vida.",
        "Meu potencial é ilimitado e minha trajetória é brilhante.",
        "Eu tenho o poder de criar mudanças positivas em minha vida.",
        "Eu mereço tudo de bom que a vida tem a oferecer.",
        "Eu atraio riqueza e prosperidade com cada pensamento positivo que eu tenho.",
        "Eu mereço amor e aceitação incondicional.",
        "Eu sou um imã para oportunidades abundantes.",
        "Eu mereço relaxar e cuidar de mim mesmo.",
        "Minha capacidade de superar desafios é ilimitada.",
        "Eu acredito nas minhas habilidades e talentos.",
        "Eu mereço experimentar amor verdadeiro e genuíno.",
        "Eu sou um criador de mudanças positivas no mundo.",
        "Eu sou grato por todas as lições que a vida me ensina.",
        "Eu sou o arquiteto do meu destino.",
        "Eu mereço ser feliz e bem-sucedido em todas as áreas da minha vida.",
        "Eu mereço desfrutar de cada momento da minha vida.",
        "Eu sou abençoado com uma mente clara e calma.",
        "Eu sou único e especial, não há ninguém como eu.",
        "Eu sou resiliente, forte e corajoso, não importa o que aconteça.",
        "Eu confio no processo da vida.",
        "Eu mereço aceitar elogios e reconhecimento pelo meu trabalho.",
        "Eu sou capaz de fazer escolhas que são boas para mim.",
        "Eu tenho o poder de criar a vida que eu desejo.",
        "Eu sou grato por todas as oportunidades que a vida me oferece.",
        "Eu mereço ser amado e apreciado por quem eu sou.",
        "Eu sou grato pelo meu corpo saudável e mente vibrante.",
        "Eu sou forte, confiante e corajoso.",
        "Eu sou o autor da minha própria história.",
        "Eu mereço investir tempo e energia no meu crescimento pessoal.",
        "Eu sou digno de respeito e dignidade.",
        "Eu mereço experimentar felicidade e prazer todos os dias.",
        "Eu sou merecedor de todas as coisas boas da vida.",
    ];
    let timer;

    generateBtn.addEventListener('click', function() {
        clearTimeout(timer);
        const randomQuote = getRandomQuote();
        quoteText.textContent = randomQuote;
        startTimer();
    });

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function startTimer() {
        // Timer
        const timeoutDuration = 20000;
        timer = setTimeout(function() {
            quoteText.textContent = "Fico feliz em te ajudar! Caso não se sinta bem ainda...Aperte no botão azul. Caso persista esse sentimento, ligue 188 ( CVV - Centro de valorização da vida ). Você não está sozinho!";
        }, timeoutDuration);
    }
});