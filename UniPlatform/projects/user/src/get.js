const config = require('./config').config;

const tableName = config.tableName;
const getItem = require('../ddb/get').get;

exports.get = async (event, context, callback) => {
  try {
    const account = event.queryStringParameters.account;
    const data = await getItem(tableName, account);
    callback(null, data);
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
