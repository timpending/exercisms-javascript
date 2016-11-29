function Pangram (input) {
  this.input = input
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  this.lc = this.input.toLowerCase();
  this.test = [];

  for (char of this.alphabet) {
    if (this.lc.indexOf(char) > -1){
      this.test.push(char)
    }
  }
}

Pangram.prototype.isPangram = function (){
  return this.test.length === 26 ? true : false
}



module.exports = Pangram;
