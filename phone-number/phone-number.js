function PhoneNumber(input) {
  this.cleanNum = input.replace(/\D/g,'');
}
  PhoneNumber.prototype.number = function() {
    if (this.cleanNum.length === 10) {
      return this.cleanNum
    };
    if (this.cleanNum.length===11 && this.cleanNum[0] ==='1') {
      return this.cleanNum.substring(1,this.cleanNum.length);
    };
    return '0000000000';
  };

  PhoneNumber.prototype.areaCode = function() {
    return this.number().substring(0, 3);
  }

  PhoneNumber.prototype.toString = function(){
    return `(${this.areaCode()}) ${this.cleanNum.substring(3,6)}-${this.cleanNum.substring(6, this.cleanNum.length)}`;
  }





module.exports = PhoneNumber;
