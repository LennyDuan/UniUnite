const config = require('./config').config;

const tableName = config.tableName;
const scanAll = require('../ddb/scan').scanAll;
const scanOne = require('../ddb/scan').scanOne;


exports.scanAll = async (event, context, callback) => {
  try {
    const data = await scanAll(tableName);
    callback(null, data);
  } catch (error) {
    console.log(error);
    callback(error);
  }
};

exports.scanOne = async (event, context, callback) => {
  try {
    // Make sure the event have correct format
    const name = event.queryStringParameters.name;
    const value = event.queryStringParameters.value;
    const data = await scanOne(tableName, name, value);
    callback(null, data);
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
