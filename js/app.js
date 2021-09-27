const beginBtn = document.querySelector('#begin-game');
const playArea = document.querySelector('#play-area');
const myGame = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
beginBtn.addEventListener('click', () => {
 myGame.startGame();
 beginBtn.style.display = 'none';
 playArea.style.opacity = '1';
});

document.addEventListener('keydown', (e) => {
 myGame.handleKeydown(e);
});