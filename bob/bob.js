var Bob = function() {};

Bob.prototype.hey = function(input) {
  let endChar = input[input.length-1]

  if (input.toUpperCase() == input && input.toLowerCase() !== input) {
    return 'Whoa, chill out!';
  } else if (endChar === '?'){
    return 'Sure.';
  } else if (input === '' || input.replace((/\s/g), '') ==''){
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.'
  }
};

module.exports = Bob;
