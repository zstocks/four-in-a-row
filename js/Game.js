class Game {
 constructor() {
  this.board = new Board();
  this.players = this.createPlayers();
  this.ready = false;
 }

 createPlayers() {
  const players = [
   new Player(1, 'Zachary', 'red', true),
   new Player(2, 'Jacqalyn', 'charcoal')
  ]

  return players;
 }
}