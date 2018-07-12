const AWS = require('aws-sdk');

const config = {
  region: 'eu-west-1',
  index_name: 'id'
};

const docClient = new AWS.DynamoDB.DocumentClient({ region: config.region });

module.exports = {
  config,
  docClient
};
