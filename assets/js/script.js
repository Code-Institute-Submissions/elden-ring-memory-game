/* THE_CARDS_WILL_BE_GENERATED_FROM_AN_ARRAY_OF_FIGURES */
const cardFigures = [
    "./assets/images/cards/alexander.jpg",
    "./assets/images/cards/melina.jpg",
    "./assets/images/cards/queen-marika.jpg",
    "./assets/images/cards/ranni.jpg",
    "./assets/images/cards/radagon.jpg",
];


const mediaQueries = {
    toMobileL: matchMedia('screen and (max-width: 1024px)'),
}

let gameStarted = false;

/* OBJECT_TO_CALCULATE_AND_STORE_THE_SCORES */
const scores = {
    guess: 0,
    fail: 0,
    maxGuess: cardFigures.length,
    maxFail: Math.max(3, Math.trunc(cardFigures.length * 1.5)),
};

/* THE_ELEMENTS_WILL_BE_SELECTED_GLOBALLY_IN_ORDER_TO_BE_RECYCLED */
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

/* FUNCTION_TO_CREATE_A_SINGLE_CARD */
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

/*FUNCTION_TO_UPDATE_THE_GAME_AREA */
function updateFrame() {
    const numOfCards = cardFigures.length * 2;

    const cols = Math.min(5, cardFigures.length);
    const minCols = (cardFigures.length % 2 === 0) ? 2 : 3;

    const columns = mediaQueries.toMobileL.matches ? 2 : Math.max(minCols, cols);
    const rows = numOfCards / columns;

    gameArea.style.setProperty('--columns', columns.toString());
    gameArea.style.setProperty('--rows', rows.toString());
}

/*FUNCTIONS_TO_GENERATE_ALWAYS_TWO_IDENTICAL_CARDS*/
function generateCards(){
    const numOfCards = cardFigures.length * 2;

    for(let i = 0; i < numOfCards; i++){
        const card = createCard();

        gameArea.appendChild(card);
    }
    randomFigures();
}

/* FUNCTION_TO_RANDOMIZE_FIGURES */
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

/* FUNCTION_TO_CHECK_IF_THE_FIRST_PICKED_CARD_MATCHES_WITH_THE_SECOND_ONE */
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

/* FUNCTION_TO_CHECK_IF_THE_SCORE_OF_THE_PICKED_CARDS_FROM_THE_ARRAY */
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

/*FUNCTIONS_THAT_ALLOWS_THE_USER_TO_ALWAYS_RESET_THE_GAME_AT_ANYTIME, BY_RESETTING_THE_INNER_HTML_OF_THE_GAME_AREA*/
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