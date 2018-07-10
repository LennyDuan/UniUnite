const config = require('./config').config;

const tableName = config.tableName;
const scanDDB = require('../ddb/scan').scan;


exports.handler = async (event, context, callback) => {
  try {
    const data = await scanDDB({ tableName });
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
