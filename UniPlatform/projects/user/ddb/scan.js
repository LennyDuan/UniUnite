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
  };
  console.log(`Read DDB table: ${tableName}`);
  console.log('#############');
  const data = await docClient.scan(scanningParameters).promise();
  console.log(JSON.stringify(data));
  console.log('#############');
  return data.Items;
};
