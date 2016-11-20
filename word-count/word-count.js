function Words(input){
  this.input = input

  this.count = function(input) {
    let wordArray = input.match(/\S+/g)
    let wordCloud = {};
    let count = 1;
    for (let i=0; i<wordArray.length; i++){
        let lcWord = wordArray[i].toLowerCase();
        wordCloud[lcWord] = wordCloud.hasOwnProperty(lcWord) ? wordCloud[lcWord] + 1 : 1
      }
      return wordCloud
     }
  }


module.exports = Words
