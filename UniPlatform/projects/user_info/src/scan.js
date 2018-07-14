const config = require('./config').config;

const tableName = config.tableName;
const scanAll = require('../ddb/scan').scanAll;
const scanOne = require('../ddb/scan').scanOne;
const scanUser = require('../ddb/scan').scanUser;


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

exports.scanUser = async (event, context, callback) => {
  try {
    // Make sure the event have correct format
    const account = event.queryStringParameters.account;
    const password = event.queryStringParameters.password;
    const data = await scanUser(tableName, account, password);
    callback(null, data);
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
