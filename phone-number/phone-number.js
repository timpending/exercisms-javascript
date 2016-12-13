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
    return cleanNum;
  };

  PhoneNumber.prototype.areaCode = function() {
    return this.number().substring(0, 3);
  }

  PhoneNumber.prototype.toString = function(){
    let shortNum = this.number().substring(3, this.badNum.length);
    return "(" + this.areaCode() + ") " + shortNum.substring(0, 3) + "-" + shortNum.substring(3, shortNum.length);
  }





module.exports = PhoneNumber;
