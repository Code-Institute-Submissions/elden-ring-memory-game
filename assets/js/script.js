/*THE CARDS WILL BE GENERATED FROM AN ARRAY OF FIGURES
*/

const cardFigures = [];

/*THE ELEMENTS WILL BE SELECTED GLOBALLY IN ORDER TO BE RECYCLED*/

const gameBoard = document.getElementById('game-board');
const gameArea = document.getElementById('game-area');

const guess = document.getElementById('guess');
const fail = document.getElementById('fail');

const resetButton = document.getElementById('reset');
const startButton = document.getElementById('start');

const showRulesButton = document.getElementById('show-rules');
const hideRulesButton = document.getElementById('hide-rules');

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
    
}
generateCards();


