const config = require('./config').config;

const tableName = config.tableName;
const putItem = require('../ddb/scan').put;

exports.put = async (event, context, callback) => {
  try {
    const item = event.body;
    const data = await putItem(tableName, item);
    callback(null, "Create/Update successful");
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
