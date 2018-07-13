const docClient = require('./config').docClient;

exports.put = async (tableName, object) => {
   const putParameters = {
      Item: object,
      TableName: tableName,
    }
    console.log(`Put item ${object}  to DDB table: ${tableName}`);
    console.log('#############');
    const data = await docClient.put(putParameters).promise()
    console.log('#############');
}
