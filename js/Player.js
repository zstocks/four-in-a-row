class Player {
 constructor(id, name, color, active = false) {
  this.id = id; 
  this.name = name;
  this.color = color;
  this.active = active;
  this.tokens = this.createTokens(21);
 }

 /**
  * Places all unused tokens into an array
  * @return (array) An array of unused tokens
  */
 get unusedTokens() {
  return this.tokens.filter(token => !token.dropped);
 }

 /**
  * Gets the currently active token to display on screen
  * @return (Object) the active token to render of the screen
  */
 get activeToken() {
  return this.unusedTokens[0];
 }

 /**
 * Creates token objects for player
 * @param {number} num - Number of token objects to be created
 * @returns {Array} An array of the newly created token objects
 */
 createTokens(numberOfTokens) {
  const tokens = [];

  for (let i = 0; i < numberOfTokens; i++) {
   const token = new Token(i, this);
   tokens.push(token);
  }

  return tokens;
 }

 /**
 * Check if a player has any undropped tokens left
 * @return {Boolean} 
 */
 hasTokens() {
  return this.unusedTokens.length !== 0 ? true : false;
 }
}