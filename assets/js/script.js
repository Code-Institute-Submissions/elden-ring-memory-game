/* The cards will be generated from an array of figures */
const cardFigures = [
    new URL("../images/cards/alexander.jpg", import.meta.url),
    new URL("../images/cards/malenia-blade-of-miquella.jpg", import.meta.url),
    new URL("../images/cards/melina.jpg", import.meta.url),
    new URL("../images/cards/queen-marika.jpg", import.meta.url),
    new URL("../images/cards/ranni.jpg", import.meta.url),
];

let gameStarted = false;

/* Object to calculate and store the scores */
const scores = {
    guess: 0,
    fail: 0,
};

/* The elements will be selected globally in order to be recycled */
const gameBoard = document.getElementById('game-board');
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

function generateCards(){
    const numOfCards = cardFigures.length * 2;
    const columns = (cardFigures.length) % 6;
    const rows = numOfCards / columns;

    gameArea.style.setProperty('--columns', columns);
    gameArea.style.setProperty('--rows', rows);
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

function runGame(){
}

/* Function to check if the first picked card matches with the second one */
function checkPickedCards(){
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
    const guessed = pickedCards[0].style.backgroundImage === pickedCards[1].style.backgroundImage;

    if(guessed){
        scores.guess ++;
        //TODO check if win
    }
    else{
        scores.fail ++;
        //TODO check if lose
    }

    updateScoreboard()

    return guessed
}

function updateScoreboard(){
}

function resetGame(){
}

function displayRules(){
    rulesModal.showModal();
}

function hideRules(){
    rulesModal.close();
}


startButton.addEventListener('click', function(){
    hideRules();
    runGame();
    startButton.remove();
});

hideRulesButton.addEventListener('click', hideRules);
showRulesButton.addEventListener('click', displayRules);

generateCards();
displayRules();

