const debug = require('../util/logger').debug
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'});

export
const logOutput = async (payload, context, callback) => {
  const scanningParameters = {
       TableName: 'universities.university',
   }
   console.log('Read DDB');
   const data = await docClient.scan(scanningParameters).promise();

   callback(null, data)
};
