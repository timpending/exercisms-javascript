function PhoneNumber(input) {
  this.badNum = input;
}
  PhoneNumber.prototype.number = function() {
    let cleanNum = this.badNum.replace(/\D/g,'');
    if (cleanNum.length>11 || cleanNum.length<10){
      return '0000000000';
    } else if (cleanNum.length===11 && cleanNum[0]!=='1'){
      return '0000000000';
    } else if (cleanNum.length===11 && cleanNum[0] ==='1'){
      return cleanNum.substring(1, cleanNum.length);
    }
    return cleanNum
  }




module.exports = PhoneNumber;
