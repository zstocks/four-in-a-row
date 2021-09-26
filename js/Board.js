class Board {
 constructor() {
  this.rows = 6;
  this.columns = 7;
  this.spaces = this.createSpaces();
 }

 /** 
 * Generates 2D array of spaces. 
 * @return  {Array}     An array of space objects
 */
 createSpaces() {
  const spaces = [];

  for (let col = 0; col < this.columns; col++) {
   const column = [];

   for (let row = 0; row < this.rows; row++) {
    const space = new Space(col, row);
    column.push(space);
   }

   spaces.push(column);
  }

  return spaces;
 }
}