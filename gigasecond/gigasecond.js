function Gigasecond(givenDate) {
  this.givenDate = givenDate;

  this.date = function() {
    let outputGigasecond = new Date(this.givenDate.getTime() + 1000000000000)
    return outputGigasecond
  }
};


module.exports = Gigasecond
