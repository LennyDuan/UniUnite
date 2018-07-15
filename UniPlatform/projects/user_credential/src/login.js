const md5 = require('md5');
const moment = require('moment');
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
    const correctCredential = md5(password);
    console.log(`Correct credential for this user: ${correctCredential}`);
    if (correctCredential !== credential) {
        throw error(`Invalid account or password: ${account} - ${credential}`)
    } else {
      console.log(`Verified user: ${account} - ${correctCredential}`);
      const item = {
        account,
        credential,
        
      }
    }
    throw error(`Unexpected Error`)
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
