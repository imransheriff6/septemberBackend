const express = require('express');
// const client = require('./Controller/connection')
const app = express();
const cors = require('cors');
const user = require("./Routes/user")
const port = 3001;
let data = [];
app.use(express.json());
app.use(cors());
app.use((req,res,next)=>{
    console.log(req.url,req.method);
    next();
})
app.use("/user",user);


// const uri = "mongodb+srv://admin:admin1234@cluster0.eahf4.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("DB connected")
//       const collection = client.db("Amazon").collection("test");
//       // perform actions on the collection object
//       client.close();
//     }
// });
// mongoose.connect(uri)
// .then(()=>{
//     console.log(mongoose.connection.db,"DB connected")
//     // Amazon.find()
// })
// .catch((err)=>{
//     console.log(err)
// })
app.listen(port,()=>{
    console.log("API activated...")
})