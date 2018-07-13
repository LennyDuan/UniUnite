const config = require('./config').config;

const tableName = config.tableName;
const indexName = config.indexName;
const queryOne = require('../ddb/query').queryOne;


exports.queryOne = async (event, context, callback) => {
  try {
    // Make sure the event have correct format
    const value = event.queryStringParameters.value;
    const name = indexName;
    const data = await queryOne(tableName, name, value);
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
