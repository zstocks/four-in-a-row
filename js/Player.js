class Player {
 constructor(id, name, color, active = false) {
  this.id = id; 
  this.name = name;
  this.color = color;
  this.active = active;
  this.tokens = this.createTokens(21);
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

 placeToken() {
  // decrease token count by 1
  // check for winners -> end game or switch turns
 }
}