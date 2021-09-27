class Game {
 constructor() {
  this.board = new Board();
  this.players = this.createPlayers();
  this.ready = false;
 }

 /**
  * Returns active player
  */
 get activePlayer() {
  return this.players.find(player => player.active);
 }

 /**
  * Creates two player objects
  * @return (array) An array of two player objects
  */
 createPlayers() {
  const players = [
   new Player(1, 'Zachary', 'red', true),
   new Player(2, 'Jacqalyn', '#fff')
  ]

  return players;
 }

 /**
  * Initializes game
  */
 startGame() {
  this.board.drawHTMLBoard();
  this.activePlayer.activeToken.drawHTMLToken();
  this.ready = true;
 }

 /**
 * Branches code, depending on what key player presses
 * @param   {Object}    e - Keydown event object
 */
  handleKeydown(e) {
   if (this.ready) {

    if (e.key === 'ArrowDown') {
     this.playToken();
    } else if (e.key === 'ArrowLeft') {
     this.activePlayer.activeToken.moveLeft();
    } else if (e.key === 'ArrowRight') {
     this.activePlayer.activeToken.moveRight(this.board.columns);
    }

   }
  }

  playToken() {
   const spaces = this.board.spaces;
   const activeToken = this.activePlayer.activeToken;
   const targetColumn = spaces[activeToken.columnLocation];
   let targetSpace = null;

   for (const space of targetColumn) {
    if (space.token === null) {
     targetSpace = space;
    }
   }

   if (targetSpace !== null) {
     const game = this;
     this.ready = false;

     activeToken.drop(targetSpace, () => {
      game.updateGameState(activeToken, targetSpace);
     });
    }
  }

  /** 
  * Checks if there a winner on the board after each token drop.
  * @param   {Object}    Targeted space for dropped token.
  * @return  {boolean}   Boolean value indicating whether the game has been won (true) or not (false)
  */
  checkForWin(target) {
   const owner = target.token.owner;
   let win = false;

   // vertical
   for (let x = 0; x < this.board.columns; x++ ){
       for (let y = 0; y < this.board.rows - 3; y++){
           if (this.board.spaces[x][y].owner === owner && 
               this.board.spaces[x][y+1].owner === owner && 
               this.board.spaces[x][y+2].owner === owner && 
               this.board.spaces[x][y+3].owner === owner) {
                   win = true;
           }           
       }
   }

   // horizontal
   for (let x = 0; x < this.board.columns - 3; x++ ){
       for (let y = 0; y < this.board.rows; y++){
           if (this.board.spaces[x][y].owner === owner && 
               this.board.spaces[x+1][y].owner === owner && 
               this.board.spaces[x+2][y].owner === owner && 
               this.board.spaces[x+3][y].owner === owner) {
                   win = true;
           }           
       }
   }

   // diagonal
   for (let x = 3; x < this.board.columns; x++ ){
       for (let y = 0; y < this.board.rows - 3; y++){
           if (this.board.spaces[x][y].owner === owner && 
               this.board.spaces[x-1][y+1].owner === owner && 
               this.board.spaces[x-2][y+2].owner === owner && 
               this.board.spaces[x-3][y+3].owner === owner) {
                   win = true;
           }           
       }
   }

   // diagonal
   for (let x = 3; x < this.board.columns; x++ ){
       for (let y = 3; y < this.board.rows; y++){
           if (this.board.spaces[x][y].owner === owner && 
               this.board.spaces[x-1][y-1].owner === owner && 
               this.board.spaces[x-2][y-2].owner === owner && 
               this.board.spaces[x-3][y-3].owner === owner) {
                   win = true;
           }           
       }
   }

   return win;
  }

  /** 
  * Switches active player. 
  */
  switchPlayers() {
   for (const player of this.players) {
    player.active = player.active === true ? false : true;
   }
  }

  /** 
  * Displays game over message.
  * @param {string} message - Game over message.      
  */
  gameOver(message) {
   document.getElementById('game-over').style.display = 'block';
   document.getElementById('game-over').textContent = message;
  }

  /** 
  * Updates game state after token is dropped. 
  * @param   {Object}  token  -  The token that's being dropped.
  * @param   {Object}  target -  Targeted space for dropped token.
  */
  updateGameState(token, target) {
   target.mark(token);

   if (this.checkForWin(target)) {
    this.gameOver(`${this.activePlayer.name} has WON!`);
   } else {
    this.switchPlayers();

    if (this.activePlayer.hasTokens()) {
     this.activePlayer.activeToken.drawHTMLToken();
     this.ready = true;
    } else {
     this.gameOver(`${this.activePlayer.name} has no more tokens to play!`);
    }
   }
  }
}