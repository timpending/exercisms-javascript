function Anagram(input){
  this.input = input;
}

Anagram.prototype.matches = function(cases){
  let initial = this.input;
  let sorted = this.input.toLowerCase().split('').sort().join('');
  let output = [];
  let array = cases

  if (typeof(cases) === 'string'){
      array = [];
      for (var item of arguments){
        array.push(item);
      }
  }

  array.forEach(function(word){
    let test = word.toLowerCase().split('').sort().join('');
    if (test === sorted && initial !== word.toLowerCase()){
      output.push(word)
    }
  });
  return output
}


module.exports = Anagram;
