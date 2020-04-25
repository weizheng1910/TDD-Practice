const FOO_BAR_QIX_MAPPING = {
  3: "Foo",
  5: "Bar",
  7: "Qix",
};

const FOO_BAR_QIX_KEYS = Object.keys(FOO_BAR_QIX_MAPPING);
const FOO_BAR_QIX_KEYS_INT = FOO_BAR_QIX_KEYS.map((elem) => parseInt(elem));

const EMPTY_STRING = "";
const NO_REMAINDER = 0;

module.exports = {
  FOO_BAR_QIX_MAPPING,
  EMPTY_STRING,
  NO_REMAINDER,
  FOO_BAR_QIX_KEYS,
  FOO_BAR_QIX_KEYS_INT,
};
