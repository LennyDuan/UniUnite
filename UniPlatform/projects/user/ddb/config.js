const AWS = require('aws-sdk');

const config = {
  region: 'eu-west-1',
  indexName: 'id',
};

const docClient = new AWS.DynamoDB.DocumentClient({ region: config.region });

module.exports = {
  config,
  docClient,
};
