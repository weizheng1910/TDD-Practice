const { EMPTY_STRING, FOO_BAR_QIX_MAPPING, FOO_BAR_QIX_KEYS_INT } = require('./constant')


function convertNumberIntoArray(number) {
  return number
    .toString()
    .split(EMPTY_STRING)
}

function isDigitFooBarQix(digit) {
  return FOO_BAR_QIX_KEYS_INT
  .filter((fooBarKeyNumber) => fooBarKeyNumber == digit)
  .map((fooBarKeyNumber) => FOO_BAR_QIX_MAPPING[fooBarKeyNumber])
  .join(EMPTY_STRING)
}

function containsFooBarQix(number){
  return convertNumberIntoArray(number)
    .map((elem) => isDigitFooBarQix(elem))
    .join(EMPTY_STRING)
}

module.exports = {
  convertNumberIntoArray,
  isDigitFooBarQix,
  containsFooBarQix
}