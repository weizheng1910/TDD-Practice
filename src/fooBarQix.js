const { divisibleByFooBarQix } = require("./divisibleFooBarQix");
const { containsFooBarQix } = require("./containsFooBarQix");

module.exports = {
  compute(number) {
    return divisibleByFooBarQix(number) + containsFooBarQix(number) || number;
  },
};
