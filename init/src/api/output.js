const debug = require('../util/logger').debug

export
const logOutput = async (payload, context, callback) => {
  debug(payload);
  debug(context);
  debug(callback);
  callback(null, '200');
};
