const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017/"; 
let client ={}
try{
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true }); 
    console.log('DB connected');
    // client.db.test.renameCollection('Products')
    // client.Amazon.test.renameCollection("Products");
}catch(err){
    console.log(err)
    console.log("Error while connecting with DB")
}
module.exports = client;