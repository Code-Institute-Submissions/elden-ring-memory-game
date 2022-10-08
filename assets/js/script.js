/* The cards will be generated from an array of figures */
const cardFigures = [
    "../images/cards/alexander.jpg",
    "../images/cards/malenia-blade-of-miquella.jpg",
    "../images/cards/melina.jpg",
    "../images/cards/queen-marika.jpg",
    "../images/cards/ranni.jpg",
    "../images/cards/vulcano-manor.jpg",
    "../images/cards/radagon.jpg",
];

const mediaQueries = {
    toMobileL: matchMedia('screen and (max-width: 1024px)'),
}

let gameStarted = false;

/* Object to calculate and store the scores */
const scores = {
    guess: 0,
    fail: 0,
    maxGuess: cardFigures.length,
    maxFail: Math.max(3, Math.trunc(cardFigures.length * 1.5)),
};

/* The elements will be selected globally in order to be recycled */
const gameArea = document.getElementById('game-area');

const gameCards = document.getElementsByClassName('game-card');

const guess = document.getElementById('guess');
const fail = document.getElementById('fail');

const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

const showRulesButton = document.getElementById('show-rules');
const hideRulesButton = document.getElementById('hide-rules');

/** @type {HTMLDialogElement} */
const rulesModal = document.getElementById('rules');

/* Function to create a single card */
function createCard(){
    const card = document.createElement('button');
    card.classList.add('game-card', 'covered');

    card.addEventListener('click', function(){
        if(!gameStarted){
            return false;
        }

        if(!card.classList.contains('guessed') && card.classList.contains('covered')){
            card.classList.add('flip');
            card.classList.toggle('covered');
            checkPickedCards();
        }
    })

    card.addEventListener('transitionend', function (){
        card.classList.remove('flip');
    })

    return card;
}

function updateFrame() {
    const numOfCards = cardFigures.length * 2;

    const cols = Math.min(5, cardFigures.length);
    const minCols = (cardFigures.length % 2 === 0) ? 2 : 3;

    const columns = mediaQueries.toMobileL.matches ? 2 : Math.max(minCols, cols);
    const rows = numOfCards / columns;

    gameArea.style.setProperty('--columns', columns.toString());
    gameArea.style.setProperty('--rows', rows.toString());
}

function generateCards(){
    const numOfCards = cardFigures.length * 2;

    for(let i = 0; i < numOfCards; i++){
        const card = createCard();

        gameArea.appendChild(card);
    }
    randomFigures();
}

/* Function to randomize figures */
function randomFigures(){
    for (const cardFigure of cardFigures){
        let cards = 0;
        while(cards < 2){
            let randomCard = Math.floor(Math.random() * gameCards.length);

            let card = gameCards[randomCard];

            if(!card.style.backgroundImage){
                card.style.backgroundImage = `url(${cardFigure})`;
                cards ++;
            }
        }
    }
}

/* Function to check if the first picked card matches with the second one */
function checkPickedCards(){
    if(!gameStarted){
        return false;
    }

    const pickedCards = document.querySelectorAll('.game-card:not(.covered):not(.guessed)');
    if(pickedCards.length !== 2){
        return null;
    }

    const guessed = checkScore(pickedCards)

    for(const card of pickedCards){
        if(!guessed){
            setTimeout(()=> card.classList.add('flip', 'covered'), 650);
        }
        else{
            card.classList.add('guessed');
        }
    }
    return guessed;
}

/* Function to check if the score of the picked cards from the array */
function checkScore(pickedCards){
    if(!gameStarted){
        return false;
    }

    const guessed = pickedCards[0].style.backgroundImage === pickedCards[1].style.backgroundImage;

    let gameFinished = false;
    let gameStatus;

    if(guessed){
        scores.guess ++;
        if(scores.guess === scores.maxGuess){
            gameFinished = true;
            gameStatus = true;
        }
    }
    else{
        scores.fail ++;
        if(scores.fail === scores.maxFail){
            gameFinished = true;
            gameStatus = false;
        }
    }

    updateScoreboard();
    if(gameFinished){
        return showGameOverScreen(gameStatus);
    }

    return guessed
}

function updateScoreboard(){
    guess.textContent = scores.guess;
    fail.textContent = scores.fail;
}

function resetGame(){
    gameArea.innerHTML = "";

    scores.guess = 0;
    scores.fail = 0;

    updateScoreboard();
    updateFrame();

    generateCards();

    gameStarted = true;
}

function showGameOverScreen(playerWon){
    gameStarted = false;

    const gameOverScreen = document.createElement('div');
    const gameOverText = document.createElement('h2');

    gameOverText.textContent =  playerWon ? 'You win' : 'You died';

    gameOverScreen.classList.add(
        'game-over',
        playerWon ? 'win' : 'lose'
    );

    gameOverScreen.appendChild(gameOverText);
    gameArea.appendChild(gameOverScreen);
}

function displayRules(){
    rulesModal.showModal();
}

function hideRules(){
    rulesModal.close();
}

resetButton.addEventListener('click', resetGame);

startButton.addEventListener('click', function(){
    hideRules();
    startButton.remove();
});

hideRulesButton.addEventListener('click', hideRules);
showRulesButton.addEventListener('click', displayRules);

window.addEventListener('resize', updateFrame);

resetGame();
displayRules();



