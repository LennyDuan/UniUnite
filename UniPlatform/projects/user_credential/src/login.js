const config = require('./config').config;
const userTableName = config.userTableName;
const credentialTableName = config.credentialTableName;
const getUser = require('../ddb/get').get;
const createCredential = require('../ddb/put').put;

exports.login = async (event, context, callback) => {
  try {
    const account = event.queryStringParameters.account;
    const credential = event.queryStringParameters.credential;
    const user = await getUser(tableName, account);
    console.log(`Get user: ${JSON.stringify(user)}`);
    const password = user.password
    
    callback(null, data);
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
