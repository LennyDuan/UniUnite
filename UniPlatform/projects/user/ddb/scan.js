const docClient = require('./config').docClient;

exports.scanAll = async (tableName) => {
  const scanningParameters = {
    TableName: tableName,
  };
  console.log(`Read DDB table: ${tableName}`);
  console.log('#############');
  const data = await docClient.scan(scanningParameters).promise();
  console.log(JSON.stringify(data));
  console.log('#############');
  return data.Items;
};

exports.scanOne = async (tableName, name, value) => {
  const scanningParameters = {
    TableName: tableName,
    ExpressionAttributeNames: {
      '#sn': name,
    },
    ExpressionAttributeValues: {
      ':sv': value,
    },
    FilterExpression: '#sn = :sv',
  };
  console.log(`Scan DDB table: ${tableName} for ${name} - ${value}`);
  console.log('#############');
  const data = await docClient.scan(scanningParameters).promise();
  console.log(JSON.stringify(data));
  console.log('#############');
  return data.Items;
};
