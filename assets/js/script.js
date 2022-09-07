/*THE CARDS WILL BE GENERATED FROM AN ARRAY OF FIGURES
*/

const cardFigures = [
    new URL("../images/cards/alexander.jpg", import.meta.url),
    new URL("../images/cards/malenia-blade-of-miquella.jpg", import.meta.url),
    new URL("../images/cards/melina.jpg", import.meta.url),
    new URL("../images/cards/queen-marika.jpg", import.meta.url),
    new URL("../images/cards/ranni.jpg", import.meta.url),
];

let gameStarted = false;

/*THE ELEMENTS WILL BE SELECTED GLOBALLY IN ORDER TO BE RECYCLED*/

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

/*FUNCTIONS */

function generateCards(){

    const numOfCards = cardFigures.length * 2;
    const columns = (cardFigures.length) % 6;
    const rows = numOfCards / columns;

    gameArea.style.setProperty('--columns', columns);
    gameArea.style.setProperty('--rows', rows);
    for(let i = 0; i < numOfCards; i++){
        const card = document.createElement('button');
        card.classList.add('game-card');
        gameArea.appendChild(card);
    }
    randomFigures();
}
generateCards();

/*FUNCTION TO RANDOMIZE FIGURES*/
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

function flipCard(){

}

function checkScore(){
}

function updateScoreboard(){
}

function resetGame(){
}

function displayRules(){
    showRulesButton.addEventListener('click', displayRules);
    rulesModal.showModal();
}

function hideRules(){
    hideRulesButton.addEventListener('click', hideRules);
    rulesModal.close();
}







