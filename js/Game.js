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
   new Player(2, 'Jacqalyn', 'charcoal')
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
     console.log('Going Down!');
    } else if (e.key === 'ArrowLeft') {
     console.log('Going Left!');
    } else if (e.key === 'ArrowRight') {
     console.log('Going Right!');
    }
   }
  }
}