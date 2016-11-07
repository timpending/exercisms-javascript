function Hamming() {};

Hamming.prototype.compute = function (str1, str2) {
  if (str1.length!== str2.length){
    throw new Error('DNA strands must be of equal length.');
  }
  let count=0;
  for (let i=0; i<str1.length; i++){
    if (str1.charAt(i) !== str2.charAt(i)){
      count++;
    }
  }
  return count;
}

module.exports = Hamming
