const { NO_REMAINDER, EMPTY_STRING, FOO_BAR_QIX_MAPPING, FOO_BAR_QIX_KEYS_INT } = require('./constant')

function isDivisible(dividend,divisor) {
  return dividend % divisor === NO_REMAINDER
} 

function divisibleByFooBarQix(number) {
  return FOO_BAR_QIX_KEYS_INT
    .filter((divisor) => isDivisible(number,divisor))
    .map((divisor) => {
      return FOO_BAR_QIX_MAPPING[divisor.toString()]
    })
    .join(EMPTY_STRING)
}


module.exports = {
  isDivisible,
  divisibleByFooBarQix
}