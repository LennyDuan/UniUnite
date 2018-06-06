"use strict";

var log = function log(value) {
  return console.log("LOG: " + value);
};

var info = function info(value) {
  return console.log("INFO: " + value);
};

var debug = function debug(value) {
  return console.log("DEBUG: " + value);
};

module.exports = {
  log: log,
  info: info,
  debug: debug
};
//# sourceMappingURL=logger.js.map