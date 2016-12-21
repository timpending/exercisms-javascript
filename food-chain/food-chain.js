function FoodChain() {
  this.animalArray = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow'];
};

FoodChain.prototype.verse = function(x, y){
  let song = ''
  if (!y) {
    switch (x) {
      case 2:
      console.log('in case 2');
      this.firstLine(x);
      break;
    default:
      song += this.firstLine(x);
      break;
    }
    song += `I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n`;
  }
  return song;
}
// 'I know an old lady who swallowed a bird.\n' +
//   'How absurd to swallow a bird!\n' +
//   'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
//   'She swallowed the spider to catch the fly.\n' +
//   'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';



// Build the fly outcome (last line).
// Opener for the animal.
// ==>
// if Fly ==> i know... [fly]... i dont know why, perhaps she'll die
// Return array position plus 1, reference that, and then return the specific instance.

FoodChain.prototype.firstLine = function(position){
  let animal = this.animalArray[position - 1]
  return `I know an old lady who swallowed a ${animal}.\n`;
}


// FoodChain.prototype.first(animal){
//
//
// }

module.exports = FoodChain;
