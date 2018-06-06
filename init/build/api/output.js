'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('babel-polyfill');
var debug = require('../util/logger').debug;
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-1' });

var logOutput = exports.logOutput = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(payload, context, callback) {
    var scanningParameters, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            scanningParameters = {
              TableName: 'universities.university'
            };

            console.log('Read DDB');
            _context.next = 4;
            return docClient.scan(scanningParameters).promise();

          case 4:
            data = _context.sent;


            callback(null, data);

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function logOutput(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=output.js.map