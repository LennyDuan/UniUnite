const md5 = require('md5');
const moment = require('moment');
const config = require('./config').config;

const userTableName = config.userTableName;
const credentialTableName = config.credentialTableName;
const dateFormat = config.dateFormat;
const expiredTime = config.expiredTime;
const getUser = require('../ddb/get').get;
const createCredential = require('../ddb/put').put;

exports.login = async (event, context, callback) => {
  try {
    const account = event.body.account;
    const credential = event.body.credential;
    const user = await getUser(userTableName, account);
    console.log(`Get user: ${JSON.stringify(user)}`);
    const password = user.password;
    const correctCredential = md5(password);
    console.log(`Correct credential for this user: ${correctCredential}`);
    if (correctCredential !== credential) {
      throw new Error(`Invalid account or password: ${account} - ${credential}`);
    } else {
      console.log(`Verified user: ${account} - ${correctCredential}`);
      const item = {
        account,
        credential,
        date_started: moment().format(dateFormat),
        date_expired: moment().add('days', expiredTime).format(dateFormat),
      };
      console.log(`New credential: ${JSON.stringify(item)}`);
      await createCredential(credentialTableName, item);
      callback(null, item);
    }
  } catch (error) {
    console.log(error);
    callback(error);
  }
};
