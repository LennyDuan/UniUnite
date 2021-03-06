const config = require('./config').config;

const tableName = config.tableName;
const putItem = require('../ddb/put').put;

exports.put = async (event, context, callback) => {
  try {
    const item = event.body;
    await putItem(tableName, item);
    callback(null, 'Create/Update successful');
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
