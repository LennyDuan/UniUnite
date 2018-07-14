const docClient = require('./config').docClient;

exports.get = async (tableName, key) => {
  const getParameters = {
    TableName: tableName,
    Key: {
      'account': key,
    },
  };
  console.log(`Get user ${key} from DDB table: ${tableName}`);
  console.log('#############');
  const data = await docClient.get(getParameters).promise();
  console.log('#############');
  return data.Item;
};
