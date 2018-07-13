const docClient = require('./config').docClient;

exports.put = async (tableName, item) => {
  const putParameters = {
    Item: item,
    TableName: tableName,
  };
  console.log(`Put item ${item}  to DDB table: ${tableName}`);
  console.log('#############');
  const data = await docClient.put(putParameters).promise();
  console.log('#############');
};
