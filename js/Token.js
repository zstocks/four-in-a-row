class Token {
 constructor(index, owner) {
  this.owner = owner;
  this.id = `token-${index + 1}-${owner.id}`;
  this.dropped = false;
  this.columnLocation = 0;
 }

 get htmlToken() {
  return document.getElementById(this.id);
 }

 get offsetLeft() {

 }

 /**
  * Draws new HTML token
  */
 drawHTMLToken() {
  const token = document.createElement('div');
  document.getElementById('game-board-underlay').append(token);
  token.id = this.id;
  token.className = 'token';
  token.style.backgroundColor = this.owner.color;
 }

 moveLeft() {

 }

 moveRight() {
  
 }
}