const docClient = require('./config').docClient;

exports.queryOne = async ({ tableName, name, value }) => {
  const queryParameters = {
    KeyConditionExpression: '#qn = :qv',
    ExpressionAttributeNames: {
      '#qn': name,
    },
    ExpressionAttributeValues: {
      ':qv': value,
    },
    TableName: tableName,
  };

  console.log(`Query DDB table: ${tableName}`);
  console.log('#############');
  const data = await docClient.query(queryParameters).promise();
  console.log(JSON.stringify(data));
  console.log('#############');
  return data.Items[0];
};
