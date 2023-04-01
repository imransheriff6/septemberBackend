const client = require('./connection');
module.exports = {
    getAllProduct: async (req, res) => {
        try {
            const data = await client.db('Amazon').collection('test').find({}).toArray();
            res.send(data)
        } catch (err) {
            console.log(err)
            res.send("500 server error")
        }
    },
    wildCardfilter: async (req, res) => {
        let query = req.params.query;
        query = new RegExp(query,'i')
        try {
            const data = await client.db('Amazon').collection('test').find({ "category": query }).toArray();
            res.send(data)
        }catch(err){
            res.send(err)
        }
    }
}