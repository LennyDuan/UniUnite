const moment = require('moment');
const config = require('./config').config;
const getCredential = require('../ddb/get').get;

const credentialTableName = config.credentialTableName;
const dateFormat = config.dateFormat;

// Internal Lambda
exports.verify = async (event, context, callback) => {
  try {
    const account = event.queryStringParameters.account;
    const credential = event.queryStringParameters.credential;
    const userCredential = await getCredential(credentialTableName, account);
    if (!userCredential) {
      throw new Error(`Invalid account: ${account}`);
    }
    console.log(`Get user credential: ${JSON.stringify(userCredential)}`);
    const correctCredential = userCredential.credential;
    console.log(`Correct credential for this user: ${correctCredential}`);
    if (correctCredential !== credential) {
      throw new Error(`Invalid account or password: ${account} - ${credential}`);
    }

    const currentDate = moment()
    const expiredDate = moment(userCredential.date_expired, dateFormat);
    console.log(`Current date [${currentDate}] - Expired date [${expiredDate}]`);
    if (currentDate.isAfter(expiredDate)) {
      throw new Error(`Credential Expired: ${expiredDate}`);
    }
    callback(null, true);
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
