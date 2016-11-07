function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(strand) {
  let rna = [];
  let dnaArray = strand.split('')
  dnaArray.forEach(char => {
    switch(char){
      case 'G':
        rna.push('C');
        break;
      case 'C':
        rna.push('G');
        break;
      case 'T':
        rna.push('A');
        break;
      case 'A':
        rna.push('U')
        break;
    }
  })
  return rna.join('')
};

module.exports = DnaTranscriber
