const config = require('./config').config;
const tableName = config.tableName;
const index_name = config.index_name;
const queryOne = require('../ddb/query').queryOne;


exports.queryOne = async (event, context, callback) => {

  try {
    const value = event.queryStringParameters.value
    const name = index_name;
    const data = await queryOne({ tableName, name, value });
    callback(null, data);
  } catch (error) {
    callback(error);
  }
};
