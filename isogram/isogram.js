function Isogram(input) {
  this.input = input
}

Isogram.prototype.isIsogram = function () {

  this.input = this.input.replace(/ |-/g, '');

  let array = this.input.toLowerCase().split('');
  for (var i = 0; i < array.length; i++) {
    let count = 0;
    for (char of this.input.toLowerCase()){
      if (array[i] === char) {
        count++
      }
      if (count > 1){
        return false
      }
    }
  }
  return true;
}



module.exports = Isogram
