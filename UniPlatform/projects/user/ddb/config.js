const AWS = require('aws-sdk');

const config = {
  region: 'eu-west-1',
};

const docClient = new AWS.DynamoDB.DocumentClient({ region: config.region });

module.exports = {
  docClient,
};
