class Token {
 constructor(index, owner) {
  this.owner = owner;
  this.id = `token-${index + 1}-${owner.id}`;
  this.dropped = false;
 }
}