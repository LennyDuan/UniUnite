const config = require('./config').config;

const tableName = config.tableName;
const scanAll = require('../ddb/scan').scanAll;


exports.scanAll = async (event, context, callback) => {
  try {
    const data = await scanAll(tableName);
    callback(null, data);
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
