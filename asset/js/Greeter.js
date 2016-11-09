var config = require('../data/config.json');

module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.gtText;
  return greet;
};