function FoodChain() {};

FoodChain.prototype.verse = function(x, y){
  let song = '';
  if (x >= 8 ){
    song = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n'
    return song;
  }
  if (!y) {
    if (x > 1) {
      song += this.firstLine(this.getAnimal(x));
      song += this.secondLine(this.getAnimal(x));
      song += this.swallowLines(x);
    }
    if (x===1){
      song += this.firstLine(this.getAnimal(x));
    }
    song += `I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n`;
  }
  return song;
}

FoodChain.prototype.getAnimal = function (position) {
  let animalArray = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow'];
  return animalArray[position-1];
};

FoodChain.prototype.firstLine = function(animal){
  return `I know an old lady who swallowed a ${animal}.\n`;
}

FoodChain.prototype.secondLine = function (animal){
  switch (animal) {
    case 'spider':
      return `It wriggled and jiggled and tickled inside her.\n`
      break;
    case 'bird':
      return `How absurd to swallow a bird!\n`
      break;
    case 'cat':
      return 'Imagine that, to swallow a cat!\n'
      break;
    case 'dog':
      return 'What a hog, to swallow a dog!\n'
      break;
    case 'goat':
      return 'Just opened her throat and swallowed a goat!\n'
      break;
    case 'cow':
      return 'I don\'t know how she swallowed a cow!\n'
      break;
    default:
      break;
  }
};

FoodChain.prototype.swallowLines = function (position){
  let animalArray = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow'];
  let lines = '';
  while (position > 1){
      if (position === 3) {
        lines += `She swallowed the ${animalArray[position-1]} to catch the ${animalArray[position-2]} that wriggled and jiggled and tickled inside her.\n`
        position--;
      }
      lines += `She swallowed the ${animalArray[position-1]} to catch the ${animalArray[position-2]}.\n`;
      position--;
    }
  return lines;
};




//
// I know an old lady who swallowed a fly.
// I don't know why she swallowed the fly. Perhaps she'll die.
//
//√ I know an old lady who swallowed a spider.
// It wriggled and jiggled and tickled inside her.
// She swallowed the spider to catch the fly.
// √ I don't know why she swallowed the fly. Perhaps she'll die.
//
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


module.exports = FoodChain;
