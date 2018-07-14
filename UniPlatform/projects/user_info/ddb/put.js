const docClient = require('./config').docClient;

exports.put = async (tableName, item) => {
  const putParameters = {
    Item: item,
    TableName: tableName,
  };
  console.log(`Put user info item ${JSON.stringify(item)}  to DDB table: ${tableName}`);
  console.log('#############');
  await docClient.put(putParameters).promise();
  console.log('#############');
};
