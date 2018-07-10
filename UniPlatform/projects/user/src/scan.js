const config = require('config').config;

const tableName = config.tableName;
const scan = require('../ddb/scan').scan;


exports.handler = (event, context, callback) => {
  try {
    const data = scan({ tableName });
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
